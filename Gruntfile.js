const sass = require('node-sass');

module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      options: {
        implementation: sass,
        sourceMap: false,
      },
      dist: {
        files: {
          'src/css/style.css': 'src/css/style.sass',
        },
      },
    },

    autoprefixer: {
      options: {
        browsers: 'last 16 versions',
      },
      your_target: {
        files: {
            'src/css/style.css': 'src/css/style.css',
        },
      },
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
        keepSpecialComments: 0,
      },
      target: {
        files: {
          'src/css/style.min.css': 'src/css/style.css',
        },
      },
    },

    uncss: {
      dist: {
        files: {
          'src/css/style.min.css': 'src/index.html',
        },
      },
    },

    uglify: {
      options: {
        compress: {
          sequences: false,
        },
      },
      my_target: {
        files: {
          'src/js/script.min.js': 'src/js/script.js',
        },
      },
    },

    jshint: {
      all: 'src/js/script.js',
    },

    htmlmin: {
      dist: {
        options: { 
          removeComments: true,
          collapseWhitespace: true,
        },
        files: {
          'dist/index.html': 'src/index.html', 
        },
      },
    },

    copy: {
      css: {
        src: 'src/css/style.min.css',
        dest: 'dist/css/style.min.css',
      },
      js: {
        src: 'src/js/script.min.js',
        dest: 'dist/js/script.min.js',
      },
    },

    watch: {
      scripts: {
        files: ['src/**/*.*', 'src/*.*', ],
        tasks: ['sass', 'autoprefixer', 'cssmin', 'uncss', 'uglify', 'jshint', 'htmlmin', 'copy:css', 'copy:js', 'watch', ],
      },
    },

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'uncss', 'uglify', 'jshint', 'htmlmin', 'copy:css', 'copy:js', 'watch', ]);

};