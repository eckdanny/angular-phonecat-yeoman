'use strict';

angular.module('demoApp', ['ngRoute', 'phonecatServices', 'phonecatFilters'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/phones', {
        templateUrl: 'views/phones.html',
        controller: 'PhonesCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
