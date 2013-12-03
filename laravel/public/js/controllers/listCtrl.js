define([
  'app',
  'services/active'
], function(app) {
  app.controller('listCtrl', function($scope, Active) {
    $scope.activeLogo = paths.logo;
    $scope.loading = paths.loading;
    $scope.hasSearched = false;
    $scope.isSearching = false;
    
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.data = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }; 
    });
    
    $scope.finished = function() {
      return $scope.hasSearched && !$scope.isSearching;  
    }
    
    $scope.search = function() {
      $scope.hasSearched = true;
      $scope.isSearching = true;
      
      Active.search($scope.data).then(function(response) {
        $scope.items = response.data._results;
        $scope.isSearching = false;
      });
    };
  });
});