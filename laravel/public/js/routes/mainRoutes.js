define([
  'app',
  'controllers/listCtrl'
], function(app) {
  'use strict';
  return app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', { 
      controller: 'listCtrl', 
      templateUrl: paths.base + '/js/templates/search.html?a' 
    });  
  }]);
});