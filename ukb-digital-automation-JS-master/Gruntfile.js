module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        protractor: {
            options: {
                configFile: "C:/Users/426205/AppData/Roaming/npm/node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            run: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "D:/protractor/ProtractorAutomationFramework/config.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            },
        },
    })
    grunt.registerTask('test', ['protractor']);
    grunt.registerTask('default', ['test']);
};
