'use strict';

/**
 * @ngdoc function
 * @name belajarAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the belajarAngularApp
 */
angular.module('belajarAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
