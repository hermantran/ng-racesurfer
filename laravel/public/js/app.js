define([
  'angular',
  'angular.route',
  'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCSzrZvnw8n4yyw-cKVk7XEuXYSUD88g8w&sensor=false!callback'
], function(angular) {
  'use strict';
  return angular.module('myApp', ['ngRoute'])
    .value('paths', paths)
    .value('google', google);
});