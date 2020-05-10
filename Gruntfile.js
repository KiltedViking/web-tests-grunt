module.exports = function(grunt) {
  //Configure plug-ins
  grunt.initConfig({
    copy: {
      main: {
        files: [
          // includes files within path
          // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
     
          // includes files within path and its sub-directories
          { expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/' },
          { expand: true, cwd: 'src/css/', src: ['*.css'], dest: 'dist/css/' },
     
          // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
     
          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
      bootstrap: {
        files: [
          { expand: true, cwd: 'node_modules/bootstrap/dist/css', src: ['*'],  dest: 'dist/css/' },
        ],
      },
      bootstrapjs: {
        files: [
          { expand: true, cwd: 'node_modules/bootstrap/dist/js', src: ['*.js'], dest: 'dist/js/' },
        ],
      },
      bulma: {
        files: [
          { expand: true, cwd: 'node_modules/bulma/css', src: ['*'],  dest: 'dist/css/' },
        ],
      },
      css: {
        files: [
          { expand: true, src: ['node_modules/font-awesome/css/*'], dest: 'dist/css/', filter: 'isFile', flatten: true, },
        ],
      },
      fonts: {
        files: [
          { 
            expand: true, 
            src: [
              'node_modules/bootstrap/dist/fonts/*',
              'node_modules/font-awesome/fonts/*',
              // 'node_modules/materialize-css/dist/fonts',
              // 'node_modules/uikit/dist/fonts'
            ], 
            dest: 'dist/fonts/', 
            filter: 'isFile', 
            flatten: true, },
        ],
      },
      foundation: {
        files: [
          { expand: true, cwd: 'node_modules/foundation-sites/dist/css', src: ['foundation.*'],  dest: 'dist/css/' },
        ],
      },
      foundationicons: {
        files: [
          { expand: true, cwd: 'node_modules/foundation-icons', src: ['*.css', '*.eot', '*.ttf', '*.woff', '*.svg'],  dest: 'dist/css/' },
        ],
      },
      foundationjs: {
        files: [
          { expand: true, cwd: 'node_modules/foundation-sites/dist/js', src: ['**/*'],  dest: 'dist/js/' },
        ],
      },
      images: {
        files: [
          { expand: true, src: ['src/images/*'], dest: 'dist/images/', filter: 'isFile', flatten: true, },
        ],
      },
      jquery: {
        files: [
          { expand: true, cwd: 'node_modules/jquery/dist', src: ['*.js'], dest: 'dist/js/' },
        ],
      },
      js: {
        files: [
          {
            expand: true, 
            src: [
              'src/js/main.js', 
              'node_modules/jquery-match-height/dist/*-min.js',
              'node_modules/materialize-css/dist/js/*.js',
              'node_modules/muicss/dist/js/*.js',
              'node_modules/semantic-ui-css/semantic.js',
              'node_modules/semantic-ui-css/semantic.min.js'
            ], 
            dest: 'dist/js/',
            filter: 'isFile',
            flatten: true,
          },
        ],
      },
      materialize: {
        files: [
          { expand: true, cwd: 'node_modules/materialize-css/dist/css', src: ['*.css'],  dest: 'dist/css/' },
        ],
      },
      mui: {
        files: [
          { expand: true, cwd: 'node_modules/muicss/dist/css', src: ['mui.*'],  dest: 'dist/css/' },
        ],
      },
      pure: {
        files: [
          { expand: true, cwd: 'node_modules/purecss/build', src: ['pure.css', 'pure-min.css'],  dest: 'dist/css/' },
        ],
      },
      semantic: {
        files: [
          { expand: true, cwd: 'node_modules/semantic-ui-css', src: ['semantic.css', 'semantic.min.css'],  dest: 'dist/css/' },
        ],
      },
      semanticassets: {
        files: [
          { expand: true, cwd: 'node_modules/semantic-ui-css/themes/default/assets', src: ['**/*'],  dest: 'dist/css/themes/default/assets/' },
        ],
      },
      skeleton: {
        files: [
          { expand: true, cwd: 'node_modules/skeleton-css/css', src: ['*'],  dest: 'dist/css/' },
        ],
      },
      uikit: {
        files: [
          { expand: true, cwd: 'node_modules/uikit/dist/css', src: ['**/*'],  dest: 'dist/css/' },
        ],
      },
      uikitjs: {
        files: [
          { expand: true, cwd: 'node_modules/uikit/dist/js', src: ['**/*'],  dest: 'dist/js/' },
        ],
      },
      
      yui: {
        files: [
          { expand: true, cwd: 'node_modules/yui/yui', src: ['yui-min.js'], dest: 'dist/js/' },
        ],
      },
      yuicss: {
        files: [
          { expand: true, cwd: 'node_modules/yui/cssreset', src: ['cssreset.css'], dest: 'dist/styles/css/yui/', flatten: true },
        ],
      },
    },
    // concat: {
    //   css: {
    //     src: ['src/styles.css', 'src/styles2.css'],
    //     dest: 'dist/built.css',
    //   },
    //   js: {
    //     src: ['src/scripts.js', 'src/scripts2.js'],
    //     dest: 'dist/built.js',
    //   },
    // },
    watch: {
      css: {
        files: ['src/**/*.css', 'src/**/*.html', 'src/**/*.js'],
        // tasks: ['copy:main'],
        tasks: ['copy:main'],
      },
    },
    browserSync: {
      dev: {
          bsFiles: {
              src : [
                  'dist/css/*.css',
                  'dist/**/*.html'
              ]
          },
          options: {
              watchTask: true,
              server: './dist'
          }
      }
    },
  });

  //Load module installed with npm
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask("build", ["copy"]);
  grunt.registerTask("default", ["browserSync", "watch"]);

};