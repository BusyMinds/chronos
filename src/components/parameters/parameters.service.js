'use strict';

function Parameters() {
  var data = {
    title: '',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timePeriods: [],
    subjects: [],
    teachers: [],
    groups: [],
    activities: []
  };

  return {
    data: data
  };
}

angular.module('chronos')
  .factory('Parameters', Parameters);
