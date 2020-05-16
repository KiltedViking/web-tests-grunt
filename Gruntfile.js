module.exports = function(grunt) {
  //Configure plug-ins
  grunt.initConfig({
    copy: {
      mainhtml: {
        files: [
          // includes files within path and its sub-directories
          { expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/' },
          
          // includes files within path
          // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
     
          // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
     
          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
      maincss: {
        files: [
          { expand: true, cwd: 'src/css/', src: ['*.css'], dest: 'dist/css/' },
        ],
      },
      mainjs: {
        files: [
          { expand: true, cwd: 'src/javascript/', src: ['**/*.js'], dest: 'dist/javascript/' },
        ],
      },
      mainassets: {
        files: [
          { 
            expand: true, 
            cwd: 'src/',
            src: ['**/*.ico', '**/*.json', '**/*.xml', 'javascript/html5/*.mp3'], 
            dest: 'dist/' 
          },
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
      ckeditor: {
        files: [
          { expand: true, cwd: 'node_modules/@ckeditor/ckeditor5-build-classic/build', src: ['**/*'],  dest: 'dist/js/' },
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
              // 'node_modules/uikit/dist/fonts',
              'node_modules/oswald-fontface/fonts/Regular/*',
              'node_modules/oswald-fontface/fonts/Bold/*',
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
      handlebars: {
        files: [
          { expand: true, cwd: 'node_modules/handlebars/dist', src: ['**/*'], dest: 'dist/js/' },
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
      jqueryui: {
        files: [
          { expand: true, cwd: 'downloads/jquery-ui-1.12.1', src: ['*.css'], dest: 'dist/css' },
        ],
      },
      jqueryuiimages: {
        files: [
          { expand: true, cwd: 'downloads/jquery-ui-1.12.1/images', src: ['**/*'], dest: 'dist/css/images' },
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
              'node_modules/semantic-ui-css/semantic.min.js',
              'node_modules/tinymce/tinymce*.js',
              'downloads/jquery-ui-1.12.1/*.js'
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
      moment: {
        files: [
          { expand: true, cwd: 'node_modules/moment/dist', src: ['**/*'],  dest: 'dist/js/' },
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
      tinymceplugins: {
        files: [
          { expand: true, cwd: 'node_modules/tinymce/plugins', src: ['**/*'],  dest: 'dist/js/plugins/' },
        ],
      },
      tinymceskins: {
        files: [
          { expand: true, cwd: 'node_modules/tinymce/skins', src: ['**/*'],  dest: 'dist/js/skins/' },
        ],
      },
      tinymcethemes: {
        files: [
          { expand: true, cwd: 'node_modules/tinymce/themes', src: ['**/*'],  dest: 'dist/js/themes/' },
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
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy:mainhtml'],
      },
      css: {
        files: ['src/**/*.css'],
        tasks: ['copy:maincss'],
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['copy:mainjs'],
      },
    },
    browserSync: {
      dev: {
          bsFiles: {
              src : [
                'dist/**/*.html',
                'dist/css/*.css',
                'dist/javascript/**/*.js',
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