'use strict';

describe('Controller: PhoneDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var PhoneDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhoneDetailCtrl = $controller('PhoneDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
