describe('Home page', function() {
  var ptor
    , linkBtn
    ;

  beforeEach(function () {
    ptor = protractor.getInstance();

    ptor.get('http://localhost:9000/#/');
    ptor.waitForAngular();

    getLinkBtn = function () {
      return protractor.By.linkText('Take me to phonecat!');
    };

  });

  it('should have a nice yeoman image', function() {
    var logo = ptor.findElement(protractor.By.className('yeoman-logo'));
    expect(logo.getAttribute('src')).toContain('.png');
  });

  it('should show a link to the phonecat demo if secret password is entered', function () {

    var secretInput
      , linkBtns
      ;

    secretInput = ptor.findElement(protractor.By.input('secret.text'));

    // Should be absent initially
    expect(ptor.isElementPresent(getLinkBtn())).toBe(false);

    // Should stay absent for bad passwords
    secretInput.sendKeys('awesome');
    expect(ptor.isElementPresent(getLinkBtn())).toBe(false);

    // Should attach to the DOM on correct password
    secretInput.clear();
    secretInput.sendKeys('password');
    expect(ptor.isElementPresent(getLinkBtn())).toBe(true);

    // Should go away when if valid password is invalidated
    secretInput.sendKeys('X');
    expect(ptor.isElementPresent(getLinkBtn())).toBe(false);

    // Backspace should make the password valid again
    secretInput.sendKeys('\u0008'); // unicode backspace
    expect(ptor.isElementPresent(getLinkBtn())).toBe(true);

  });

  describe('phonecat button', function() {

    beforeEach(function () {
      var secretInput = secretInput = ptor.findElement(protractor.By.input('secret.text'));
      secretInput.sendKeys('password');
    });

    it('should link to the phonecat demo', function() {
      ptor.findElement(getLinkBtn()).click();
      ptor.waitForAngular();
      expect(ptor.getCurrentUrl()).toContain('/phones');
    });

  });

});
