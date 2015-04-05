'use strict';

angular.module('chronos', ['ngAnimate', 'ngSanitize', 'ngResource', 'ngRoute', 'ngTagsInput'])
  .constant('_', window._)
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/general/general.html',
        controller: 'GeneralCtrl',
        controllerAs: 'general'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope._ = window._;
  });
