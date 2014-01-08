define([
  'app',
  'services/geolocation',
  'services/active',
  'services/gmap',
], function(app) {
  'use strict';
  app.controller('listCtrl', function($scope, $document, geolocation, Active, gmap, paths) {
    $scope.activeLogo = paths.logo;
    $scope.loading = paths.loading;
    $scope.hasSearched = false;
    $scope.isSearching = false;
    $scope.geolocationEnabled = geolocation.isEnabled;
    $scope.map = $document[0].querySelectorAll('.map')[0];
    
    $scope.finished = function() {
      return $scope.hasSearched && !$scope.isSearching;  
    };
      
    $scope.search = function() {
      $scope.hasSearched = true;
      $scope.isSearching = true;
    
      Active.search($scope.pos).then(function(response) {
        $scope.items = response.data._results;
        $scope.isSearching = false;
      });
    };

    if ($scope.geolocationEnabled) {
      geolocation.get().then(function(pos) {
        $scope.pos = pos;
        gmap.render({
          center: pos,
          el: $scope.map
        });
      });
    }
  });
});