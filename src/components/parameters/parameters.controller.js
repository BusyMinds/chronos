'use strict';

function ParametersCtrl(Parameters) {
  var vm = this;
  vm.data = Parameters.data;
}

angular.module('chronos')
  .controller('ParametersCtrl', ParametersCtrl);

ParametersCtrl.$inject = ['Parameters'];
