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
            angular: 'lib/angular.min',
            requireLib: 'lib/require.min',
            'angular.route': 'lib/angular-route.min',
            'angular.animate': 'lib/angular-animate.min',
            'angular.sanitize': 'lib/angular-sanitize.min',
            async: 'lib/async'
          },
          out: 'public/js/dist/main.js',
          optimize: 'none'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'public/js/dist/main.min.js': ['public/js/dist/main.js']
        }
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'compressed'  
        },
        files: {
          'public/css/styles.min.css': ['public/css/scss/main.scss']  
        }
      }
    },
    
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      scss: {
        files: ['public/css/**/*.scss'],
        tasks: ['sass']
      }
    }
  });
  
  grunt.registerTask('default', ['jshint']);
  
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
};