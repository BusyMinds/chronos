'use strict';

function Pages() {
  var pages = [{
    id: 1,
    title: 'General',
    path: '/',
    active: true,
    available: true
  }, {
    id: 2,
    title: 'Subjects',
    path: '/subjects',
    active: false,
    available: true
  }, {
    id: 3,
    title: 'Teachers',
    path: '/teachers',
    active: false,
    available: true
  }, {
    id: 4,
    title: 'Groups',
    path: '/groups',
    active: false,
    available: true
  }, {
    id: 5,
    title: 'Activities',
    path: '/activities',
    active: false,
    available: false
  }, {
    id: 6,
    title: 'Submit',
    path: '/submit',
    active: false,
    available: false
  }];

  return {
    pages: pages
  };
}

angular.module('chronos')
  .factory('Pages', Pages);
