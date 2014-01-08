define([
  'app'
], function(app) {
  'use strict';
  app.service('geolocation', function($rootScope, $window, $q) {
    this.isEnabled = 'geolocation' in $window.navigator;
    
    this.get = function() {
      var deferred = $q.defer();
      
      function onSuccess(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        
        $rootScope.$apply(function() {
          deferred.resolve(pos);
        });
      }
      
      function onError() {
        $rootScope.$apply(function() {
          deferred.resolve(false);
        });
      }
      
      $window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
      return deferred.promise;
    };
  });
});