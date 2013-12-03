define([
  'app',
], function(app) {
  app.service('Active', function($http) {
    this.search = function(data) {
      console.log(data);
      var url = paths.active; // Global set in Laravel view
      
      var promise = $http({
        method: 'GET',
        url: url,
        params: data
      });
      
      return promise;
    };
  });
});
