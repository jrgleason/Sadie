module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            main: {
                src: ['partials/**/*.html','partials/**/*.jade'],
                dest: 'public/javascripts/templates.js'
            }
        },
        concat: {
          dist: {
            src: ['src/angular/siteApp.js','src/angular/**/*.js'],
            dest: 'public/javascripts/angular-app.js',
          }
        },
        watch: {
          html2js:{
            files: ['partials/**/*.html','partials/**/*.jade'],
            tasks: ['html2js']
          }
        }
  });
  grunt.registerTask('default', ['before-test']);
  grunt.registerTask('before-test', ['html2js','concat']);
  return grunt;
} 
