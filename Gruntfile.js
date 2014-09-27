module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-html2js');
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            main: {
                src: ['partials/**/*.html','partials/**/*.jade'],
                dest: 'public/javascripts/templates.js'
            }
        }
  });
  grunt.registerTask('default', ['before-test']);
  grunt.registerTask('before-test', ['html2js']);
  return grunt;
} 
