'use strict';

describe('Service: phonecatServices', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var phonecatServices;
  beforeEach(inject(function(_phonecatServices_) {
    phonecatServices = _phonecatServices_;
  }));

  xit('should do something', function () {
    expect(!!phonecatServices).toBe(true);
  });

});
