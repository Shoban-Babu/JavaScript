/**********************************************************
Configuration File of Cucumber-Appium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var excel = require('../helper/excelread.js');
var bot=require('../helper/BrowserBot');
//     Declared and Initialized Allure-Reporter
var Reporter=require('../helper/Reporter.js');

exports.config = {

//      baseUrl: 'http://www.google.com',
        allScriptsTimeout:110000,
//  set to "custom" instead of cucumber in framework
        framework:'custom',
//  path relative to the current config file
        frameworkPath: require.resolve('protractor-cucumber-framework'),
//      frameworkPath: require.resolve('serenity-js'),
        directConnect: true,

// require feature files
        specs: [ excel.getSpecs()],

        cucumberOpts: {
                // require step definitions
                        require:[ '../cucumber_POM/features/*.steps.js','../helper/Reporter.js'],
                // to specify cucumber custom formatters
                        format   :'pretty',
                        keepAlive: false ,
                },

//  Mobile Capabilities
    capabilities: [{
        browserName     : 'chrome',
        bundleId        :'SafariLauncher',    //for iOS Devices
        'appium-version': '1.4.16',
        platformName    : 'Android',
        platformVersion : '6.0',
        deviceName      : '03157df341138214', //for Android Device
        'udid'          : 'XXXXXXXXXXXXXXXX'  //for iOS Devices
        },
        {
            browserName     : 'chrome',
            browser_version    : '63.0.3239.84',
            bundleId        :'SafariLauncher',    //for iOS Devices
            'appium-version': '1.4.16',
            platformName    : 'Android',
            'device': 'iPhone 8',
            'realMobile': 'true',
            'os_version': '11.0'
            },
      ]

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
     onPrepare: function() {
//      browser.ignoreSynchronization = false;
        browser.manage().window().maximize();
        browser.manage().timeouts().pageLoadTimeout(40000);
        browser.manage().timeouts().implicitlyWait(25000);

},



};
