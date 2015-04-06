'use strict';

function SolverController(Parameters) {
  var vm = this;
  vm.days = Parameters.data.days;
  vm.timePeriods = Parameters.data.timePeriods;

  vm.addNewDay = function(day) {
    if (typeof day !== "undefined" && day !== null && day !== '') {
      vm.days.push(day);
      vm.newDay = null;
    }
  };

  vm.addNewTimePeriod = function(period) {
    if (typeof period !== "undefined" && period !== null && period !== '') {
      vm.timePeriods.push(period);
      vm.newTimePeriod = null;
    }
  };
}

angular.module('chronos')
  .controller('SolverController', SolverController);

SolverController.$inject = ['Parameters'];
