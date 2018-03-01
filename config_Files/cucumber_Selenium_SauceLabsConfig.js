/**********************************************************
Configuration File of Cucumber-Selenium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var excel = require('../helper/excelread.js');
var bot=require('../helper/BrowserBot');
//     Declared and Initialized Allure-Reporter
var Reporter=require('../helper/Reporter.js');
var sauceUser = 'Priyanka2828';
var sauceKey = 'ff9510d6-a3c1-4033-899b-3bd7b3e400b6';
exports.config = {

      seleniumAddress:'http://'+sauceUser+':'+sauceKey+'@ondemand.saucelabs.com:80/wd/hub',

//    baseUrl: 'http://www.google.com',
      allScriptsTimeout:110000,
//  set to "custom" instead of cucumber in framework
      framework:'custom',
//  path relative to the current config file
      frameworkPath: require.resolve('protractor-cucumber-framework'),
    //  directConnect: true,
      troubleshoot: false, //true if you want to see actual web-driver configuration

// require feature files
      specs: [excel.getSpecs()],

      cucumberOpts: {
// require step definitions
        require:[ '../cucumber_POM/features/Login.steps.js','../helper/Reporter.js'],
// to specify cucumber custom formatters
        format   :'pretty',
        keepAlive: false ,
},

/*      capabilities: {
        browserName: 'chrome',
        maxInstances: 1
    }, */

   multiCapabilities: [ {
            browserName: 'chrome',
            'shardTestFiles': true,
             maxInstances: 1
        }, {
           browserName: 'firefox',
           'shardTestFiles': true,
           maxInstances: 1
}],

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
