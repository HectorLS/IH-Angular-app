'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
         'build/main.css':'scss/main.scss'
        }
      }
    },

    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'build/main.min.js': ['js/*.js', 'bower_components/bower-tinder-js/*.js']
        }
      }
    },

    processhtml: {
      dist: {
        options: {
          process: true,
          data: {
            title: 'My Angular app',
            message: 'This is production distribution'
          }
        },
        files: {
          'build/index.html': ['index.html']
        }
      }
    },

    copy: {
      main: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
        dest: 'build/bootstrap.min.css',
      }
    }

  });

  // Load the plugin tasks
      // generates css from sass.
  grunt.loadNpmTasks('grunt-contrib-sass');
      // provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
      // Default task(s).
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Custom tasks
  grunt.registerTask('build', ['processhtml']);
  grunt.registerTask('default', ['uglify', 'sass', 'copy']);
};