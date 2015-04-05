'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('chronos'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));
});
