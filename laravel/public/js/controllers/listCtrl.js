define([
  'app',
  'filters/unsafe',
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
    $scope.geolocationLoaded = false;
    $scope.map = $document[0].querySelectorAll('.map')[0];
    $scope.data = {};

    $scope.$watch('items', function() {
      $scope.populateMap($scope.items);
    });

    if ($scope.geolocationEnabled) {
      geolocation.get().then(function(pos) {
        if (pos) {
          $scope.data.lat = pos.lat;
          $scope.data.lng = pos.lng;
          $scope.geolocationLoaded = true;
          gmap.render({
            center: pos,
            el: $scope.map,
            title: 'Current Location',
            icon: paths.circle,
            content: 'Current Location',
            maxWidth: 250
          });
        } else {
          $scope.geolocationEnabled = false;  
        }
      });
    }

    $scope.loaded = function() {
      return $scope.geolocationEnabled && $scope.geolocationLoaded && !$scope.hasSearched;
    };
    
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
    
    $scope.populateMap = function(items) {
      var len = items ? items.length : 0,
          i = 0;
      
      gmap.clearMarkers();
      
      if (len < 1) {
        return;  
      }
      
      for (; i < len; i++) {
        gmap.addMarker({
          pos: {
            lat: items[i].meta.eventLatitude,
            lng: items[i].meta.eventLongitude
          },
          title: items[i].title,
          content: $scope.tmpl(items[i]),
          maxWidth: 250
        });
      }
    };

    $scope.tmpl = function(item) {
      return [
        '<a href="' + item.url + '" target="_blank">',
          '<h5 class="no-padding no-margin">' + item.title + '</h5>',
        '</a>',
        item.meta.eventAddress + '<br>',
        item.meta.city + ', ' + item.meta.eventState
      ].join('');
    };

    $scope.expand = function(index) {
      var item = $scope.items[index];

      if (item.shown) {
        item.shown = false;
        gmap.closeInfowindow(index);
      } else {
        item.shown = true;
        gmap.activateMarker(index);
      }
    };
  });
});