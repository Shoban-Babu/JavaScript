/**********************************************************
Configuration File of Cucumber-Selenium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var excel = require('../helper/excelread.js');
var bot=require('../helper/BrowserBot');
//     Declared and Initialized Allure-Reporter
var Reporter=require('../helper/Reporter.js');
// var report=require('protractor-multiple-cucumber-html-reporter-plugin');

//var AllureReporter = require('cucumberjs-allure-reporter');
/*const reporter = require('cucumber-html-reporter');
  reporter.generateReport({
     source:       './cucumber_report.json',
  dest:         './Reports',
name:         'report.html',
template:     'mytemplate.html',             // your custom mustache template (uses default if not specified)
title:        'Cucumber Report',             // Title for default template. (default is Cucumber Report)
component:    'My Component',                // Subtitle for default template. (default is empty)
logo:         './logos/cucumber-logo.svg',   // Path to the displayed logo.
screenshots:  './screenshots',               // Path to the directory of screenshots. Optional.
dateformat:   'YYYY MM DD',                  // default is YYYY-MM-DD hh:mm:ss
maxScreenshots: 10

})*/

exports.config = {
//  framework:'custom',
//  frameworkPath: require.resolve('serenity-js'),
//    baseUrl: 'http://www.google.com',
      allScriptsTimeout:110000,
//  set to "custom" instead of cucumber in framework
      framework:'custom',
//  path relative to the current config file
     frameworkPath: require.resolve('protractor-cucumber-framework'),

         directConnect: true,

// require feature files
      specs: [excel.getSpecs()],

      cucumberOpts: {
// require step definitions
   require:[
   '../cucumber_POM/features/*.steps.js','../helper/Reporter.js','../helper/hooks.js'

 ],
// to specify cucumber custom formatters
        format   :['pretty'],
        keepAlive: false ,
},
     capabilities: {
       browserName: 'chrome',
       'shardTestFiles': true,
        maxInstances: 1
    },


    /*plugins: [{
           inline: require('protractor-multiple-cucumber-html-reporter-plugin'),
           options:{
             automaticallyGenerateReport: true,
              removeExistingJsonReportFile: true
    // read the options part
           }
       }],*/

   /*multiCapabilities: [ {
            browserName: 'chrome',
            'shardTestFiles': true,
             maxInstances: 1
        }, {
           browserName: 'firefox',
           version: 'latest',
           'shardTestFiles': true,
           acceptSslCerts: true,
           acceptInsecureCerts: true,
           webdriver_accept_untrusted_certs: true,
           webdriver_assume_untrusted_issuer: true,
           maxInstances: 1
         }],*/
         /*,{
            browserName: 'safari',
            'shardTestFiles': true,
            maxInstances: 1
}], */

params:{
     takeScreenshotsForPass: true,
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
/*onCleanUp: function () {
      var CucumberHtmlReport = require('cucumber-html-report');

      return CucumberHtmlReport.create({
          source: jsonReportFile,
          dest: cucumberReportDirectory,
          title: 'Protractor Test Run',
          component: new Date().toString()
      }).then(console.log).catch(console.log);
  },*/
    onPrepare: function() {

     //cucumber.getEnv().afterEach(function(done){

			//  //browser.executeScript('window.localStorage.clear();');
            //  done();

        //  });

                   //      browser.ignoreSynchronization = false;
              browser.manage().window().maximize();
              browser.manage().timeouts().pageLoadTimeout(40000);
              browser.manage().timeouts().implicitlyWait(25000);
              browser.waitForAngularEnabled(false);

      },//

};
