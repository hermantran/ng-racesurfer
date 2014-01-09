define([
  'angular',
  'angular.route',
  'angular.animate',
  'angular.sanitize',
  'async!https://maps.googleapis.com/maps/api/js?key=AIzaSyCSzrZvnw8n4yyw-cKVk7XEuXYSUD88g8w&sensor=false!callback'
], function() {
  'use strict';
  return angular.module('racesurfer', ['ngRoute', 'ngAnimate', 'ngSanitize'])
    .value('paths', paths)
    .value('google', google);
});