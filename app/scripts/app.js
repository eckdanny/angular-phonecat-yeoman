'use strict';

angular.module('demoApp', ['ngRoute', 'phonecatServices', 'phonecatFilters'])
  .config(['$routeProvider', '$logProvider', function ($routeProvider, $logProvider) {
    // Routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/phones', {
        templateUrl: 'views/phone-list.html',
        controller: 'PhonesCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'views/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    // Logger
    $logProvider.debugEnabled(true);
  }])
  .run(['$rootScope', '$log', function ($rootScope, $log) {
    $rootScope.$log = $log;
  }]);
