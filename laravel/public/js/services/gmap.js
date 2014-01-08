define([
  'app'
], function(app) {
  'use strict';
  app.service('gmap', function(google) {
    this.render = function(opts) {
      opts = opts || {};
      opts.mapTypeId = opts.mapTypeId || google.maps.MapTypeId.ROADMAP;
      opts.zoom = opts.zoom || 11;
      opts.center = new google.maps.LatLng(opts.center.lat, opts.center.lng);
      
      this.map = new google.maps.Map(opts.el, opts);
    };
  });
});