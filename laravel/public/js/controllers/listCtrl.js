define([
  'app',
  'services/geolocation',
  'services/active'
], function(app) {
  'use strict';
  app.controller('listCtrl', function($scope, geolocation, Active, paths) {
    $scope.activeLogo = paths.logo;
    $scope.loading = paths.loading;
    $scope.hasSearched = false;
    $scope.isSearching = false;
    $scope.geolocationEnabled = geolocation.isEnabled;
    
    if ($scope.geolocationEnabled) {
      geolocation.get().then(function(pos) {
        $scope.data = pos;
      });
      
      $scope.finished = function() {
        return $scope.hasSearched && !$scope.isSearching;  
      };
      
      $scope.search = function() {
        $scope.hasSearched = true;
        $scope.isSearching = true;
      
        Active.search($scope.data).then(function(response) {
          $scope.items = response.data._results;
          $scope.isSearching = false;
        });
      };
    }
  });
});