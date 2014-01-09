define([
  'app'
], function(app) {
  'use strict';
  app.service('gmap', function(google) {
    this.markers = [];
    this.infowindows = [];
    this.listeners = [];
    
    this.render = function(opts) {
      opts = opts || {};
      opts.mapTypeId = opts.mapTypeId || google.maps.MapTypeId.ROADMAP;
      opts.zoom = opts.zoom || 11;
      opts.center = new google.maps.LatLng(opts.center.lat, opts.center.lng);
      
      this.map = new google.maps.Map(opts.el, opts);
      this.setUserMarker(opts);
    };
    
    this.setUserMarker = function(opts) {
      var self = this;
      var marker = new google.maps.Marker({
        map: this.map,
        position: opts.center,
        icon: opts.icon,
        title: opts.title
      });
      
      var infowindow = new google.maps.InfoWindow({
        content: opts.content,
        maxWidth: opts.maxWidth
      });
      
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(self.map, marker);
      });
    };
    
    this.addMarker = function(opts) {
      var self = this;
      var marker = new google.maps.Marker({
        map: this.map,
        position: new google.maps.LatLng(opts.pos.lat, opts.pos.lng),
        title: opts.title
      });
      
      var infowindow = new google.maps.InfoWindow({
        content: opts.content,
        maxWidth: opts.maxWidth
      });
      
      var listener = google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(self.map, marker);
      });
      
      this.markers.push(marker);
      this.infowindows.push(infowindow);
      this.listeners.push(listener);
    };

    this.activateMarker = function(index) {
      google.maps.event.trigger(this.markers[index], 'click');
      this.map.panTo(this.markers[index].getPosition());
    };

    this.closeInfowindow = function(index) {
      this.infowindows[index].close();
    };
    
    this.clearMarkers = function() {
      for (var i = 0, len = this.markers.length; i < len; i++) {
        this.markers[i].setMap(null); 
        this.infowindows[i] = null;
        google.maps.event.removeListener(this.listeners[i]);
      }
      
      this.markers.length = 0;
      this.infowindows.length = 0;
      this.listeners.length = 0;
    };
  });
});