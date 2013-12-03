require.config({
  baseUrl: 'js/',
  
  paths: {
    angular: 'lib/angular.min',
    async: 'lib/async'
  },
  
  shim: {
    angular: {
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