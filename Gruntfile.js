'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

        concat: {
            "options": { "separator": ";" },
            "build": {
                "src": ["js/directives.js", "js/filters.js", "js/keyHandler.js","js/xmlService.js",
			"js/mainmenu/MainMenuController.js","js/mainmenu/MenuList.js", "js/mainmenu/menuService.js"],
		"dest": 'dist/js/<%= pkg.name %>.js'
            }
        },
	    uglify: {
	      options: {
		preserveComments: 'some'
	      },
	      dist: {
		files: {
		  'dist/js/<%= pkg.name %>.min.js': ['<%= concat.build.dest %>'],
		  'dist/js/ng-infinite-scroll-h-fix.min.js': ['js/ng-infinite-scroll-h-fix.js']
		}
	      }
	    },
	    jshint: {
	      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
	      options: {
		// options here to override JSHint defaults
		globalstrict: true,
		globals: {
		  console: false,
		  module: false,
		  document: false,
		  window: false,
		  CustomEvent: false,
		  angular: false,
		  jsHandler: false,
		  fireTvJsHandler: false,
		  setPosition: true,
		  setTimeout: true,
		  // TODO: maybe can remove these globals?
		  epgDebug: true,
		  menuOpen: true,
		  menuProgId: true,
		  detailsOpen: true,
		  setPopup: true,
		  popHide: true,
		  preventProgramBindings: true
		}
	      }
	    },
	    'string-replace': {
	      dist: {
		files: {
		  'dist/**.html': ['**.html'],
		},
		options: {
		  replacements: [{
		    pattern: /<script src="src\/ng-stay.js"[^]*<\/script>/m,
		    replacement: '<script src="js/<%= pkg.name%>.js"></script>'
		  }, {
		    pattern: /<script src="src\/stay-omb.js"[^]*<\/script>/m,
		    replacement: '<script src="js/<%= pkg.name%>-omb.js"></script>'
		  }, {
		    pattern: /<script src="js\/(.*).js".*<\/script>/,
		    replacement: '<script src="js/$1.min.js"></script>'
		  }, {
		    pattern: /<script src="bower_components\/(.*).js".*<\/script>/g,
		    replacement: '<script src="js/$1.min.js"></script>'
		  }]
		}
	      }
	    },
	    copy: {
	      dist: {
		files: [{
		  expand: true,
		  src: [ 'css/**/*', 'partials/**/*','images/**/*', 'views/**/*', 'js/**/*', '*.htm' ,'lib/**/*' ,'media/**/*' , 'xml/**/*' ],
		  dest: 'dist'
		}, {
		  expand: true,
		  cwd: 'bower_components',
		  src: [ '**/*.min.js', '!angular-bootstrap/ui-bootstrap.min.js' ],
		  dest: 'dist/js'
		}, {
		  expand: true,
		  cwd: 'src',
		  src: [ 'epg-device.js', 'epg-firetv.js' ],
		  dest: 'dist/js'
		}]
	      },
	      'push-gh-pages': {
		files: [{
		  expand: true,
		  cwd: 'dist',
		  src: [ '**/*' ],
		  dest: 'c:/git/mythling-gh-pages/epg/'
		}]
	      },
	      'push-mythling': {
		files: [{
		  expand: true,
		  cwd: 'dist',
		  src: [ '**/*', '!**/demo/**', '!js/mythling-epg.min.js', '!mythling-epg-omb.min.js' ],
		  dest: 'c:/git/mythling/assets/mythling-epg/'
		}]
	      }
	    },
	    compress: {
	      dist: {
		options: {
		  mode: 'zip',
		  archive: 'c:/git/mythling-gh-pages/epg/dist/<%= pkg.name %>-<%= pkg.version %>.zip'
		},
		expand: true,
		cwd: 'dist/',
		src: [ '**/*', '!**/demo/**' ]
	      }
	    },
	    watch: {
	      files: ['<%= jshint.files %>'],
	      tasks: ['jshint']
	    },
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadTasks('tasks');
  

    // Task definitions
    //grunt.registerTask('default', ['concat']);

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'string-replace', 'copy:dist']);
  
  
};

