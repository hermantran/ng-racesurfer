require.config({
  baseUrl: 'js/',
  
  paths: {
    'angular': ['//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.5/angular.min', 'lib/angular.min'],
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
  
  urlArgs: 'bust=' + new Date().getTime()
});

require([
  'angular',
  'routes/mainRoutes',
  'async'
], function(angular) {
  angular.bootstrap(document , ['racesurfer']);
});