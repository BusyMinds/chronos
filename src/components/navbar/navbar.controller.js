'use strict';

function NavbarCtrl() {
  var vm = this;
  vm.date = new Date();
}

angular.module('chronos')
  .controller('NavbarCtrl', NavbarCtrl);
