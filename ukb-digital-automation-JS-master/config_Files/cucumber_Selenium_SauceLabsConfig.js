/**********************************************************
Configuration File of Cucumber-Selenium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var excel = require('../helper/excelread.js');
var bot=require('../helper/BrowserBot');
//     Declared and Initialized Allure-Reporter
var Reporter=require('../helper/Reporter.js');
var sauceUser = 'priya1304';
var sauceKey = 'daddacfe-29fe-44d4-8ab4-57f78a57d895';
//saucepassword =zxasqw!@

var saucelabs=require('saucelabs');

  //   var sauceUser = 'TrinitaR';
//var sauceKey = '647bdaab-da17-401e-ac95-ae61f43713ef';

exports.config = {

      seleniumAddress:'http://'+sauceUser+':'+sauceKey+'@ondemand.saucelabs.com:80/wd/hub',
    // webDriverProxy:'http://proxy.cognizant.com:6050',
      ACCEPT_SSL_CERTS:true,
//    baseUrl: 'http://www.google.com',
      allScriptsTimeout:110000,
      ignoreUncaughtExceptions:true,

//  set to "custom" instead of cucumber in framework
      framework:'custom',
//  path relative to the current config file
      frameworkPath: require.resolve('protractor-cucumber-framework'),
    //  directConnect: true,
      troubleshoot: false, //true if you want to see actual web-driver configuration
      safariIgnoreFraudWarning: true,

      processArguments: '--no-ssl-bump-domains -B all',

// require feature files
      specs: [excel.getSpecs()],

      cucumberOpts: {
// require step definitions
require:[ '../cucumber_POM/features/*.steps.js','../helper/Reporter.js','../helper/hooks.js'],
// to specify cucumber custom formatters
        format   :'pretty',
        keepAlive: false ,
},
/*
capabilities: {

// browserName     : 'safari',
     //  bundleId        :'SafariLauncher',    //for iOS Devices
    // 'appium-version': '1.7.2',
     //  platformName    : 'iOS',
     //  platformVersion : '11.1',
     // 'deviceOrientation':'protrait',
     //  deviceName: 'iPhone 8 Simulator',
     //  app:''


     'browserName': 'Android',
     'deviceName' : 'Samsung Galaxy S4 Emulator',
     'deviceOrientation' : 'portrait',
       acceptSslCerts: true,
      acceptInsecureCerts: true,
      webdriver_accept_untrusted_certs: true,
      webdriver_assume_untrusted_issuer: true,

        //  browserName     : 'Chrome',
        //   bundleId        :'SafariLauncher',    //for iOS Devices
        // 'appium-version': '1.7.2',
       //    platformName    : 'iOS',
       //    platformVersion : '11.1',
        //  'deviceOrientation':'protrait',
       //    deviceName: 'iPhone 8 Simulator',
         //  app:''

       // deviceName      : '03157df341138214', //for Android Device
        //'udid'          : 'XXXXXXXXXXXXXXXX'
        // browserName: 'chrome',
        // 'shardTestFiles': true,
        //  version: 'latest',
        //  platform: 'WINDOWS',
        //  acceptSslCerts: true,
        //  acceptInsecureCerts: true,
        //  webdriver_accept_untrusted_certs: true,
        //  webdriver_assume_untrusted_issuer: true,
        //  maxInstances: 1

       //   'browserName' :'Chrome',
       //   'appiumVersion': '1.6.4',
        //  'deviceName' : 'Samsung Galaxy S4 Emulator',
        //  'deviceOrientation': 'portrait',
        //  'platformVersion':'4.4',
        //  'platformName': 'Android',

  },


     capabilities: {
        browserName: 'safari',
        'shardTestFiles': true,
        args:[
              '--no-ssl-bump-domains -B'
         //     'avoidProxy: true '
        ],
        "avoid-proxy": true,

acceptInsecureCerts: true,
webdriver_accept_untrusted_certs: true,
        webdriver_assume_untrusted_issuer: true,
        maxInstances: 1
    },

  /* multiCapabilities: [ {
            browserName: 'chrome',
            'shardTestFiles': true,
             version: 'latest',
             platform: 'WINDOWS',
             acceptSslCerts: true,
             acceptInsecureCerts: true,
             webdriver_accept_untrusted_certs: true,
             webdriver_assume_untrusted_issuer: true,
             maxInstances: 1
        }, {
           browserName: 'firefox',
           'shardTestFiles': true,
           version: 'latest',
           platform: 'WINDOWS',
           acceptSslCerts: true,
           acceptInsecureCerts: true,
           webdriver_accept_untrusted_certs: true,
           webdriver_assume_untrusted_issuer: true,
           maxInstances: 1
        }, {
           browserName: 'internet explorer',
           'shardTestFiles': true,
           version: '11',
           platform: 'WINDOWS',
           acceptSslCerts: true,
           acceptInsecureCerts: true,
           webdriver_accept_untrusted_certs: true,
           webdriver_assume_untrusted_issuer: true,
           maxInstances: 1
         }], /*{
            browserName: 'safari',
            'shardTestFiles': true,
            version: '8.0',
            platform: 'MAC',
            acceptSslCerts: true,
            acceptInsecureCerts: true,
            webdriver_accept_untrusted_certs: true,
            webdriver_assume_untrusted_issuer: true,
            maxInstances: 1
}], */

/* multiCapabilities: [{
    browserName: 'firefox',
    version: 'latest',
    platform: 'OS X 10.10',
    name: "firefox-tests",
    shardTestFiles: true,
    maxInstances: 25
}, {
    browserName: 'chrome',
    version: '41',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
}],
 {
'browserName': 'SAFARI',
'appium-version': '1.6',
'platformName': 'IOS',
'platformVersion': '10.3',
shardTestFiles: true,
maxInstances: 25
 },    */


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


      // Store the name of the browser that's currently being used.
      browser.getCapabilities().then(function (caps) {
          browser.params.browser = caps.get('browserName');
      });
                   //      browser.ignoreSynchronization = false;
            //  browser.manage().window().maximize();
              browser.manage().timeouts().pageLoadTimeout(40000);
              browser.manage().timeouts().implicitlyWait(25000);
              browser.waitForAngularEnabled(false);
      },

};
