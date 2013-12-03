module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['public/js/**/*.js', '!**/lib/*.js', '!**/*.min.js']  
    },
    
    requirejs: {
      dist: {
        options: {
          baseUrl: 'public/js',
          name: 'main',
          include: ['requireLib'],
          paths: {
            angular: 'empty:',
            requireLib: 'lib/require.min',
            async: 'lib/async'
          },
          out: 'public/js/main.min.js'
        }
      }
    },
    
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      }
    }
  });
  
  grunt.registerTask('default', ['jshint']);
  
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
};