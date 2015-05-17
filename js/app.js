'use strict';

// Declare app level module which depends on views, and components
var dhabaApp = angular.module('dhabaApp', [
  'ngRoute',
  'ui.bootstrap',
  'welcomeController',
  'userService'
]);
dhabaApp.config(function($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'template/welcome.html',
        controller: 'WelcomeCtrl'
      }).when('/:login', {
          templateUrl: 'template/login/userlogin.html',
          controller: 'UserLoginCtrl'
      }).when('/:contentAccess/userId', {
          templateUrl: 'template/content/success.html',
          controller: 'homePageCtrl'
      })
});