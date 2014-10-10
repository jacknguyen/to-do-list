module.exports = function(grunt) {
	// Load Grunt tasks declared in the package.json file
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Configure Grunt
	grunt.initConfig({

		// Grunt PHP - our server
		// https://github.com/sindresorhus/grunt-php

		php: {
			watch: {},
			all: {
				options: {
					keepalive: false,
					open: true
				}
			}
		},

		// grunt-watch will monitor the projects files
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
		    php: {
	            files: '**/index.php',
	            open: true,
	            options: {
	                livereload: true,
	        	}
	   		},
	   		css: {
	   			files: '**/css/*.css',
	   			options: {
	   				livereload: true
	   			}
	   		}
		},

		// grunt-open will open your browser at the project's URL
		// https://www.npmjs.org/package/grunt-open
		open: {
			all: {
				path: 'http://127.0.0.1:8080'
			}
		}
	});

	// Creates the `server` task
	grunt.registerTask('server', [
	    'php:watch', 'open', 'watch', 'php:all'
    ]);
};