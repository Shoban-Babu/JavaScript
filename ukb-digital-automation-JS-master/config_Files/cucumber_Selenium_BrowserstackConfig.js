/**********************************************************
Configuration File of Cucumber-Selenium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var excel = require('../helper/excelread.js');
var bot=require('../helper/BrowserBot');
//     Declared and Initialized Allure-Reporter
var Reporter=require('../helper/Reporter.js');

//var saucelabs=require('saucelabs');

//var USERNAME = 'priya1304';
//var AUTOMATE_KEY = '5UhdtTz3uxqqqFGDhidB';


exports.config = {

      seleniumAddress:'http://hub-cloud.browserstack.com/wd/hub',

    // webDriverProxy:'http://proxy.cognizant.com:6050',
      ACCEPT_SSL_CERTS:true,
//    baseUrl: 'http://www.google.com',
      allScriptsTimeout:110000,
//  set to "custom" instead of cucumber in framework
      framework:'custom',
//  path relative to the current config file
      frameworkPath: require.resolve('protractor-cucumber-framework'),
    //  directConnect: true,
      troubleshoot: false, //true if you want to see actual web-driver configuration
      safariIgnoreFraudWarning: true,
      ignoreUncaughtExceptions:true,

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
//Refer  https://www.browserstack.com/automate/capabilities

capabilities: {
 
 
      'browserstack.user': 'priyab1',
      'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
      browserName     : 'chrome',
      'browserstack.video': true,
      'browserstack.debug': true,
      'acceptSslCerts': true,
      'chromeOptions': {
      'excludeSwitches': ["disable-popup-blocking"]
      },
      maxInstances: 1

  },  
//***************************Windows************************************/
  // Chrome 

  /*     capabilities: {

    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': '62.0',
    'browserstack.video': true,
    'browserstack.debug': true,
    'acceptSslCerts': true,
    'chromeOptions': {
    'excludeSwitches': ["disable-popup-blocking"],
     }, 
 }, */

    // Firefox 
/*    capabilities: {
      'browserstack.user': 'priyab1',
      'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
      'os': 'Windows',
      'os_version': '10',
      'browserName': 'Firefox',
      'browser_version': '57.0',
      'acceptSslCerts': true
  }; */

      // IE11 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'IE',
    'browser_version': '11.0'
     'browserstack.ie.enablePopups': true,
     'acceptSslCerts': true
  }; */

        // Edge 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Edge',
    'browser_version': '16.0',
    'acceptSslCerts': true
  }; */

//*************************** IOS ************************************/
  // Safari 

  /*     capabilities: {

    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'OS X',
    'os_version': 'High Sierra',
    'browserName': 'Safari',
    'browser_version': '11.0'
     'browserstack.safari.enablePopups': true,
     'acceptSslCerts': true
    },  */

    // Firefox 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'OS X',
    'os_version': 'High Sierra',
    'browserName': 'Firefox',
    'browser_version': '57.0',
     'acceptSslCerts': true
  }; */

      // Chrome 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'OS X',
    'os_version': 'High Sierra',
    'browserName': 'Chrome',
    'browser_version': '63.0',
    'browserstack.video': true,
    'browserstack.debug': true,
    'acceptSslCerts': true,
    'chromeOptions': {
    'excludeSwitches': ["disable-popup-blocking"]

    }
  }; */

        // Opera 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB',
    'os': 'OS X',
    'os_version': 'High Sierra',
    'browserName': 'Opera',
    'browser_version': '12.15',
    'acceptSslCerts': true

  }; */

//*************************** Mobile ************************************/

          // IPhone 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB'
    'device': 'iPhone 8 Plus',
    'realMobile': 'true',
    'os_version': '11.0',
    'acceptSslCerts': true,
    'browserstack.appium_version' : 1.7.0

  }; */

            // Android +Samsung 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB'
    'device': 'Samsung Galaxy S8',
    'realMobile': 'true',
    'os_version': '7.0',
    'acceptSslCerts': true,
    'browserstack.appium_version' : 1.4.16

    }
  }; */

              // Android +Nexus 
/*    capabilities: {
    'browserstack.user': 'priyab1',
    'browserstack.key': '5UhdtTz3uxqqqFGDhidB'
    'device': 'Google Nexus 6',
    'realMobile': 'true',
    'os_version': '6.0',
    'acceptSslCerts': true,
    'browserstack.appium_version' : 1.4.16


    }
  }; */


//*************************** Multi cababilities ************************************/

/*
  'commonCapabilities': {
      'browserstack.user': 'priyab1',
      'browserstack.key': '5UhdtTz3uxqqqFGDhidB'
    },
  
    'multiCapabilities': [{
      'browserName': 'Chrome'
    },{
      'browserName': 'Safari'
    },{
      'browserName': 'Firefox'
    },{
      'browserName': 'IE'
    }]
  };
  
  // Code to support common capabilities
  exports.config.multiCapabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });  */

 

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
              browser.manage().window().maximize();
              browser.manage().timeouts().pageLoadTimeout(40000);
              browser.manage().timeouts().implicitlyWait(25000);
              browser.waitForAngularEnabled(false);
      },

};
