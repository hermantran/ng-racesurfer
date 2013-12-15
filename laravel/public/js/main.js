require.config({
  baseUrl: 'js/',
  
  paths: {
    'angular': 'lib/angular.min',
    'angular.route': 'lib/angular-route.min',
    'async': 'lib/async'
  },
  
  shim: {
    angular: {
      exports: 'angular'  
    },
    
    'angular.route': {
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
  angular.bootstrap(document , ['myApp']);
});