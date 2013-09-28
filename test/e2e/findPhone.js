describe('List page', function() {
  var ptor
    , query
    ;

  beforeEach(function () {
    ptor = protractor.getInstance();
  });

  it('should load at /phones', function () {
    ptor.get('http://localhost:9000/#/phones');
    ptor.waitForAngular();
    expect(ptor.getCurrentUrl()).toContain('/phones');
  });

  describe('text filter', function() {

    it('should return 5 phones when "samsung" is searched', function() {
      query = ptor.findElement(protractor.By.input('query'));

      query.clear();
      query.sendKeys('samsung');
      // @todo Consider using repeater By locator ( protractor.By.repeater('phone in phones').column('{{phone.id}}') )
      ptor.findElements(protractor.By.className('phone')).then(function (arr) {
        expect(arr.length).toEqual(5);
      });
    });

    it('should return 1 phone when " trans" is appended to search string', function () {
      query.sendKeys(' trans');
      // @todo Consider using repeater By locator
      ptor.findElements(protractor.By.className('phone')).then(function (arr) {
        expect(arr.length).toEqual(1);
      });
    });

  });

  describe('phone list item', function() {
    it('should launch the detail view when the title is clicked', function() {
      ptor.findElement(protractor.By.xpath('//div[contains(@class, "phone")]/a')).then(function (link) {
        link.click();
        ptor.waitForAngular();
        expect(ptor.getCurrentUrl()).toContain('/phones/samsung-transform');
      });
    });
  });

});
