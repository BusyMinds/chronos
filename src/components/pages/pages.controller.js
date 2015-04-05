'use strict';

function PagesCtrl(Pages) {
  var vm = this;
  vm.pages = Pages.pages;
}

angular.module('chronos')
  .controller('PagesCtrl', PagesCtrl);

PagesCtrl.$inject = ['Pages'];
