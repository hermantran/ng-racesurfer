define([
  'angular',
  'angular.route'
], function(angular) {
  'use strict';
  return angular.module('myApp', ['ngRoute'])
    .value('paths', paths);
});