/**********************************************************
Configuration File of Cucumber-Selenium
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var excel = require('../helper/excelread.js');
var bot = require('../helper/BrowserBot');
var data = require('../data/testdata.json');



//     Declared and Initialized Allure-Reporter
var Reporter = require('../helper/Reporter.js');
var AllureReporter = require('cucumberjs-allure-reporter');
//     XML suite files gets stored in Folder Report
var reporteroptions=require('../helper/ReporterOptions.js');
var browsername ="";
var reporter=require('cucumber-html-reporter');
var dir='Report';
var sourcejson='cucumber.json';
var log4js=require('log4js');
log4js.configure({ // configure to use all types in different files.
    appenders: [
        
        {   type: "file",
            filename: "Logs/info.log", // specify the path where u want logs folder info.log
            category: 'info',
            maxLogSize: 20480,
            backups: 10
        },
        
    ]
});

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


var browsername= "";

exports.config = {
    // resultJsonOutputFile:'cucumber.json',    // restartBrowserBetweenTests:true,
    //  framework:'custom',
    //  frameworkPath: require.resolve('serenity-js'),
    //    baseUrl: 'http://www.google.com',

    allScriptsTimeout: 30000,
    //  set to "custom" instead of cucumber in framework
    seleniumAddress:'http://localhost:4444/wd/hub',
    framework: 'custom',
    //  path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
   //SELENIUM_PROMISE_MANAGER: true,
    //closeBrowserOnExit:true,    
    seleniumArgs:
        ["-Dwebdriver.gecko.driver=/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0.exe"],
    troubleshoot: false,
    'firefox_profile': 'support/firefox_profile',
    'firefox_binary': "Applications/Firefox.exe",

   //directConnect: true,
    localSeleniumStandaloneOpts: {

        jvmArgs: ["-Dwebdriver.gecko.driver=/usr/local/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.19.1.exe"]

    },

    // require feature files
    specs: [excel.getSpecs()],
    ignoreUncaughtExceptions:true,
    acceptSslCerts: true,
    acceptInsecureCerts: true,
    webdriver_accept_untrusted_certs: true,
    webdriver_assume_untrusted_issuer: true,
    ignoreProtectedModeSettings: true,  
    cucumberOpts: {
        // require step definitions
        require: [
            '../cucumber_POM/features/*.steps.js', '../helper/Reporter.js', '../helper/hooks.js','..jasmine_POM/pages/ConnectionPage.js','../helper/DBConnection.js'

        ],
        // to specify cucumber custom formatters
        format: 'pretty',
       format:'json:./HTML_Report/cucumber.json',
        keepAlive: true,
       //tags: ['@ASMRPostCodeInvalid,@Validlogin,@Invalidlogin,@Payment,@SMR,@Regvalid,@Reginvalid,@regvalid']
     tags: data[0].tags_all ,

    },

// *************************************************** capabilities ********************************************************************************* 

     capabilities: {
     
          browserName: 'chrome',
          shardTestFiles: true,
          maxInstances: 1,
          chromeOptions: {
            args: [
                '--start-maximized'
            ]
        },
      },  

     /* capabilities: {
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '11.2',
        deviceName: 'iPhone Simulator',
        automationName: 'XCUITest',
      },*/

    /*  capabilities: {
         browserName: 'firefox',
         version: 'latest',
         'shardTestFiles': true,
         acceptSslCerts: true,
         acceptInsecureCerts: true,
         webdriver_accept_untrusted_certs: true,
         webdriver_assume_untrusted_issuer: true,
         maxInstances: 1
     }, */
    

   /*     capabilities: {
         browserName: 'internet explorer',
         version: 'latest',
         'shardTestFiles': true,
         acceptSslCerts: true,
         acceptInsecureCerts: true,
         webdriver_accept_untrusted_certs: true,
         webdriver_assume_untrusted_issuer: true,
         ignoreProtectedModeSettings: true,
         maxInstances: 1
     }, */

    /*  capabilities: {
        browserName: 'safari',
        platformName: 'iOS',
        platformVersion: '11.2',
        deviceName: 'iPhone Simulator',
        autoWebview: true,
      }, */
  
// *************************************************** multiCapabilities *************************************************** 

 /*   multiCapabilities: [ {
                 browserName: 'chrome',
                 shardTestFiles: true,
                 maxInstances: 4
             }, {
                browserName: 'firefox',
                version: 'latest',
                shardTestFiles: true,
                acceptSslCerts: true,
                acceptInsecureCerts: true,
                webdriver_accept_untrusted_certs: true,
                webdriver_assume_untrusted_issuer: true,
             maxInstances: 4
             }, {
                 browserName: 'safari',
                 shardTestFiles: true,
                 maxInstances: 4,
                 acceptSslCerts: true,
                 acceptInsecureCerts: true,
                 webdriver_accept_untrusted_certs: true,
                 webdriver_assume_untrusted_issuer: true, 
     }] , 

// *************************************************** End multiCapabilities *********************************************************************** 

     
        plugins: [{
           inline: require('protractor-multiple-cucumber-html-reporter-plugin'),
           options: {
             automati1allyGenerateReport: true,
              removeExistingJsonReportFile: true
    // read the options part
           }
       }], */

    // params: {
    //     takeScreenshotsForPass: true,
    // },
    //  Before each excution the old suite files gets flushed out
    beforeLaunch: function () {
        var rimraf = require('rimraf', ['rmdir']);
        var fs=require('fs');
        rimraf('Report', function () { console.log('Old suite files have been deleted'); });
        rimraf('HTML_Report', function () { console.log('Old suite files have been deleted'); fs.mkdirSync("HTML_Report")});
    },


    

    //     Generation of Html Allure report from xml suite files
    afterLaunch: function () {
       //var dirjson='

        return new Promise(function (resolve) {
            var allureCommandLine = require('allure-commandline');
            var generation = allureCommandLine(['generate', 'Report', '--report-dir', 'Allure-Report/Report-'+bot.reportpathTimeStamp()]);
            generation.on('exit', function (callback) {
                    console.log('Generation is finished with code:');
            });
            var options={
                theme: 'bootstrap',
                jsonDir:'HTML_Report',
              //jsonFile: 'cucumber.json', // source json
              output: 'HTML-Report.html',
              reportSuiteAsScenarios: true,
              screenshotsDirectory: 'HTML_Report/screenshots',
              storeScreenshots: true,
                   brandTitle:'Cucumber HTML Report' ,     
               //  launchReport: true, 
                 metadata: {
                    "App Version":"0.3.2",
                    "Test Environment": "STAGING",
                    
                    "Platform": "MAC Os",
                    "Parallel": "Scenarios",
                    "Executed": "Local"
                  }
            // target directory (will create if not exists)
            };
                reporter.generate(options);
        
            //bot.createhtmlreport('cucumber.json');
    });
    
    },

          //  browser.close();
      
    /*onCleanUp: function () {
          var CucumberHtmlReport = require('cucumber-html-report');
    
          return CucumberHtmlReport.create({
              source: jsonReportFile,
              dest: cucumberReportDirectory,
              title: 'Protractor Test Run',
              component: new Date().toString()
          }).then(console.log).catch(console.log);
      },*/

    onPrepare: function () {

        //cucumber.getEnv().afterEach(function(done){

        //  //browser.executeScript('window.localStorage.clear();');
        //  done();

        //  });
    //     return new Promise(function () {
           
            //      console.log("BN-"+browsername);
            // });
    //   });
   //  browser.getCapabilities().then(function (value) {

    //     browsername= value.get('browserName');
    //     console.log("BN-"+browsername);
   //  });
        //browser.ignoreSynchronization = true;
    
        browser.manage().window().setSize(2560,1600);
        browser.manage().window().maximize();
       
        browser.manage().timeouts().pageLoadTimeout(20000);
        browser.manage().timeouts().implicitlyWait(1000);
        browser.waitForAngularEnabled(false);
       
    },//

};
