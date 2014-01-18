define([
  'app',
  'controllers/listCtrl'
], function(app) {
  'use strict';
  return app.config(['$routeProvider', function($routeProvider) {
    var main = { 
        controller: 'listCtrl', 
        templateUrl: paths.base + '/js/templates/search.html' 
    };
    
    $routeProvider
      .when('/', main)
      .when('/!', main);
  }]);
});