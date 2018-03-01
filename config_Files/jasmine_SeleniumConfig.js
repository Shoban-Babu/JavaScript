/**********************************************************
Configuration File of Jasmine-Selenium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/

var excel = require('../helper/excelread.js');
var bot=require('../helper/BrowserBot');
var AllureReporter = require('jasmine-allure-reporter');
//     XML suite files gets stored in Folder Report
var reporter = new AllureReporter({
    resultsDir: 'Report'
});
exports.config = {

    // Selenium Arguments
    seleniumArgs: ['-browserTimeout=60'],
    framework: 'jasmine',
    troubleshoot: false, //true if you want to see actual web-driver configuration
    directConnect: true,
    localSeleniumStandaloneOpts: {
        jvmArgs: ["-Dwebdriver.gecko.driver=C:\\Users\\492588\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\webdriver-manager\\selenium\\geckodriver-v0.16.1.exe"]

    },
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 1          //for Parallel run
    },
    //path to the test specs

    specs: [excel.getSpecs()],
    allScriptsTimeout: 600000,
    getPageTimeout: 600000,

    //path to execute suites

    suites: {
        loginpage: 'tests/*.js',
    },
    //  Before each excution the old suite files gets flushed out
    beforeLaunch: function () {
        var rimraf = require('rimraf', ['rmdir']);
        rimraf('Report', function () { console.log('Old suite files have been deleted'); });
    },

    //     Generation of Html Allure report from xml suite files
    afterLaunch: function () {
        return new Promise(function (resolve) {
            var allureCommandLine = require('allure-commandline');
            var generation = allureCommandLine(['generate', 'Report', '--report-dir', 'Allure-Report/Report-'+bot.reportpathTimeStamp()]);
            generation.on('exit', function (callback) {
                console.log('Generation is finished with code:');
            });
        });
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);

        // Disable animations so e2e tests run more quickly
        var disableNgAnimate = function () {
            angular.module('disableNgAnimate', []).run(['$animate', function ($animate) {
                $animate.enabled(false);
            }]);
        };
        browser.addMockModule('disableNgAnimate', disableNgAnimate);

        // Store the name of the browser that's currently being used.
        browser.getCapabilities().then(function (caps) {
            browser.params.browser = caps.get('browserName');
        });
        browser.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);
    },
};
