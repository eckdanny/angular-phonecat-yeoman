'use strict'; /* global protractor: false */

describe('PhoneCat App', function() {

  var ptor;

  beforeEach(function () {
    ptor = protractor.getInstance();
  });

  it('should redirect index.html to index.html#/phones', function() {
    ptor.get('http://localhost:9000/#/blah-blah-blah');
    ptor.waitForAngular();
    expect(ptor.getCurrentUrl()).toBe('http://localhost:9000/#/phones');
  });

  describe('Phone list view', function() {

    var query;

    beforeEach(function() {
      ptor.get('http://localhost:9000/#/phones');
      query = ptor.findElement(protractor.By.input('query'));
    });

    it('should filter the phone list as user types into the search box', function() {

      ptor.findElements(protractor.By.className('phone')).then(function (arr) {
        expect(arr.length).toEqual(20);
      });

      query.clear();
      query.sendKeys('nexus');
      ptor.findElements(protractor.By.className('phone')).then(function (arr) {
        expect(arr.length).toEqual(1);
      });

      query.clear();
      query.sendKeys('motorola');
      ptor.findElements(protractor.By.className('phone')).then(function (arr) {
        expect(arr.length).toEqual(8);
      });
    });

    it('should be possible to control phone order via the drop down select box', function() {
      var i,
          names = ['Motorola XOOM\u2122 with Wi-Fi',
                   'MOTOROLA XOOM\u2122'];

      query.clear();
      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

      ptor.findElements(protractor.By.binding('{{phone.name}}')).then(function (arr) {

        var checkName = function (i) {
          var name = names[i];
          arr[i].getText().then(function (text) {
            expect(text).toEqual(name);
          });
        };

        for (i = 0; i < arr.length; i++) {
          checkName(i);
        }

      });

    });

    it('should render phone specific links', function() {
      query.clear();
      query.sendKeys('nexus');

      ptor.findElement(protractor.By.xpath('//div[contains(@class, "phone")]/a')).then(function (link) {
        link.click();
        ptor.waitForAngular();
        expect(ptor.getCurrentUrl()).toContain('/phones/nexus-s');
      });
    });
  });

  // @todo clean this up... got lazy!
  describe('Phone detail view', function() {

    beforeEach(function () {
      ptor.get('http://localhost:9000/#/phones/nexus-s');
      ptor.waitForAngular();
    });

    it('should display nesux-s page', function () {
      expect(ptor.findElement(protractor.By.binding('phone.name')).getText()).toBe('Nexus S');
    });

    it('should display the first phone image as the main phone image', function() {
      expect(ptor.findElement(protractor.By.xpath('//img[contains(@class, "phone")]')).getAttribute('src')).toContain('phones/images/nexus-s.0.jpg');
    });

    it('should swap main image if a thumbnail image is clicked on', function () {

      var getMainImg = function () {
        return ptor.findElement(protractor.By.xpath('//img[contains(@class, "phone")]'));
      };

      ptor.findElements(protractor.By.xpath('//ul[contains(@class, "phone-thumbs")]/li/img')).then(function (thumbs) {
        var i;

        expect(thumbs.length).toBe(4);

        for (i = 0; i < thumbs.length; i++) {
          thumbs[i].click();
          expect(getMainImg().getAttribute('src')).toContain('nexus-s.' + i + '.jpg');
        }
      });

    });

  });

});
