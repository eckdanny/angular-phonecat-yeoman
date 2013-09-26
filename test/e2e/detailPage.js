describe('Details page', function() {
  var ptor;

  beforeEach(function () {
    ptor = protractor.getInstance();
  });

  it('should load at the /phones/:phoneHandle', function () {
    ptor.get('http://localhost:9000/#/phones/samsung-transform');
    ptor.waitForAngular();
    expect(ptor.getCurrentUrl()).toContain('samsung-transform');
  });

  describe('thumbnail viewer', function() {

    it('should change the main image when clicked', function () {
      var getMainImg = function () {
        return ptor.findElement(protractor.By.xpath('//img[contains(@class, "phone")]'));
      };

      ptor.findElements(protractor.By.xpath('//ul[contains(@class, "phone-thumbs")]/li/img')).then(function (thumbs) {
        var i
          , imgSrc
          ;

        // Images should always be present
        expect(thumbs.length).toBeTruthy();

        // Clicking on the thumbnail should update the main image
        for (i = 0; i < thumbs.length; i++) {
          thumbs[i].click();
          expect(getMainImg().getAttribute('src')).toEqual(thumbs[i].getAttribute('src'));
        };

      });

    });

  });

});
