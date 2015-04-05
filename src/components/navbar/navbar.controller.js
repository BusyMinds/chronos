'use strict';

angular.module('chronos')
  .controller('NavbarCtrl', function($scope) {
    $scope.date = new Date();
  });
