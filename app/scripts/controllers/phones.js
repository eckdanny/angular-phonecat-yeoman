'use strict';

angular.module('demoApp')
  .controller('PhonesCtrl', ['$scope', 'Phone', function ($scope, Phone) {

    $scope.phones = Phone.query();
    $scope.orderProp = 'age';

  }]);
