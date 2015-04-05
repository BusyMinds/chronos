'use strict';

function GeneralCtrl(Parameters) {
  var vm = this;
  vm.days = angular.copy(Parameters.data.days);
  vm.timePeriods = angular.copy(Parameters.data.timePeriods);

  vm.updateParameters = function() {
    console.log(Parameters.data);
    Parameters.data.name = vm.name;
    Parameters.data.days = _.map(vm.days, function(day) {
      return day.text;
    });
    Parameters.data.timePeriods = _.map(vm.timePeriods, function(timePeriod) {
      return timePeriod.text;
    });
  };
}

angular.module('chronos')
  .controller('GeneralCtrl', GeneralCtrl);

GeneralCtrl.$inject = ['Parameters'];
