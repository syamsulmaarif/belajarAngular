'use strict';

/**
 * @ngdoc function
 * @name belajarAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the belajarAngularApp
 */
angular.module('belajarAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
