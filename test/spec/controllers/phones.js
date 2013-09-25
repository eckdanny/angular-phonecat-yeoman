'use strict';

describe('Controller: PhonesCtrl', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('demoApp'));

  var PhonesCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    scope = $rootScope.$new();
    PhonesCtrl = $controller('PhonesCtrl', {
      $scope: scope
    });
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(scope.phones).toEqualData([]);
    $httpBackend.flush();
    expect(scope.phones).toEqualData([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });

});
