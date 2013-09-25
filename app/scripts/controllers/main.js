'use strict';

angular.module('demoApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS1.2rc',
      'Karma'
    ];

    $scope.otherNotes = [
      'phonecat yeoman-ized',
      'Disabled CSS watchers for CDT',
      'EditorConfig',
      'Linting (jsHint & pre-commit hooks)',
      'Continuous Integration',
      'Protractor'
    ];

  }]);
