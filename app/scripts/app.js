'use strict';

/**
 * @ngdoc overview
 * @name belajarAngularApp
 * @description
 * # belajarAngularApp
 *
 * Main module of the application.
 */
angular
  .module('belajarAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/tes', {
        templateUrl: 'views/tes.html',
        controller: 'TesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
