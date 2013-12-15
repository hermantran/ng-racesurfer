define([
  'app'
], function(app) {
  'use strict';
  app.service('Active', function($http, paths) {
    this.search = function(data) {
      console.log(data);
      var url = paths.active;
      
      var promise = $http({
        method: 'GET',
        url: url,
        params: data
      });
      
      return promise;
    };
  });
});
