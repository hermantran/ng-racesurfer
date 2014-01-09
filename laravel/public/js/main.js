require.config({
  baseUrl: 'js/',
  
  paths: {
    'angular': 'lib/angular.min',
    'angular.route': 'lib/angular-route.min',
    'angular.animate': 'lib/angular-animate.min',
    'angular.sanitize': 'lib/angular-sanitize.min',
    'async': 'lib/async'
  },
  
  shim: {
    angular: {
      exports: 'angular'  
    },
    
    'angular.route': {
      deps: ['angular'],
      exports: 'angular'
    },
    
    'angular.animate': {
      deps: ['angular'],
      exports: 'angular'
    },

    'angular.sanitize': {
      deps: ['angular'],
      exports: 'angular'
    }
  },
  
  // urlArgs: 'bust=' + new Date().getTime()
});

require([
  'angular',
  'app',
  'routes/mainRoutes',
  'async'
], function() {
  angular.bootstrap(document, ['racesurfer']);
});