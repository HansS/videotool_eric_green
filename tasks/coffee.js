'use strict';


module.exports = function coffee(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-coffee');

    // Options
    return {
      compile: {
        expand: true,
        flatten: true,
        cwd: 'public/coffee',
        src: ['**/*.coffee'],
        dest: 'public/js',
        ext: '.js'
      }
    };
};
