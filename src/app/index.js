'use strict';

angular.module('chronos', ['ngAnimate', 'ngSanitize', 'ngResource', 'ngRoute'])
  .constant('_', window._)
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/solver/solver.html',
        controller: 'SolverController',
        controllerAs: 'solver'
      })
      // .when('/', {
      //   templateUrl: 'app/general/general.html',
      //   controller: 'GeneralCtrl',
      //   controllerAs: 'general'
      // })
      // .when('/subjects', {
      //   templateUrl: 'app/subjects/subjects.html',
      //   controller: 'SubjectsCtrl',
      //   controllerAs: 'subjects'
      // })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    $rootScope._ = window._;
  });
