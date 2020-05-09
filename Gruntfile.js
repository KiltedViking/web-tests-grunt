module.exports = function(grunt) {
  //Configure plug-ins
  grunt.initConfig({
    copy: {
      main: {
        files: [
          // includes files within path
          // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
     
          // includes files within path and its sub-directories
          {
            expand: true, 
            cwd: 'src',
            src: ['**/*.html'], 
            dest: 'dist/'
          },
          {
            expand: true, 
            cwd: 'src/styles/',
            src: ['*.css'], 
            dest: 'dist/styles/'
          },
     
          // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
     
          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
        ],
      },
      bootstrap: {
        files: [
          {
            expand: true, 
            cwd: 'node_modules/bootstrap/dist/css',
            src: ['*'], 
            dest: 'dist/styles/'
          },
        ],
      },
      bootstrapjs: {
        files: [
          {
            expand: true, 
            cwd: 'node_modules/bootstrap/dist/js',
            src: ['*.js'], 
            dest: 'dist/js/'
          },
        ],
      },
      fonts: {
        files: [
          {
            expand: true,
            src: ['node_modules/bootstrap/dist/fonts/*'], 
            dest: 'dist/fonts/',
            filter: 'isFile',
            flatten: true,
          },
        ],
      },
      jquery: {
        files: [
          {
            expand: true, 
            cwd: 'node_modules/jquery/dist',
            src: ['*.js'], 
            dest: 'dist/js/'
          },
        ],
      },
      js: {
        files: [
          {
            expand: true, 
            src: ['src/js/main.js', 'node_modules/jquery-match-height/dist/*-min.js'], 
            dest: 'dist/js/',
            filter: 'isFile',
            flatten: true,
          },
        ],
      },
      yui: {
        files: [
          {
            expand: true, 
            cwd: 'node_modules/yui/yui',
            src: ['yui-min.js'], 
            dest: 'dist/js/'
          },
        ],
      },
      yuicss: {
        files: [
          {
            expand: true, 
            cwd: 'node_modules/yui/cssreset',
            src: ['cssreset.css'], 
            dest: 'dist/styles/css/yui/',
            flatten: true
          },
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
    // watch: {
    //   js: {
    //     files: ['src/**/*.js'],
    //     tasks: ['concat:js'],
    //   },
    //   css: {
    //     files: ['src/**/*.css'],
    //     tasks: ['concat:css'],
    //   },
    // },
  });

  //Load module installed with npm
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');


  // grunt.registerTask("default", ["concat", "watch"]);

};