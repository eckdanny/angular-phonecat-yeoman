'use strict';

describe('Controller: PhoneDetailCtrl', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('demoApp'));

  var PhoneDetailCtrl,
    scope,
    $httpBackend,
    $routeParams;

  var xyzPhoneData = function() {
    return {
      name: 'phone xyz',
          images: ['image/url1.png', 'image/url2.png']
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, $routeParams) {

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

    $routeParams.phoneId = 'xyz';

    scope = $rootScope.$new();

    PhoneDetailCtrl = $controller('PhoneDetailCtrl', {
      $scope: scope
    });

  }));

  it('should fetch phone detail', function() {
    expect(scope.phone).toEqualData({});
    $httpBackend.flush();

    expect(scope.phone).toEqualData(xyzPhoneData());
  });

});
