/**********************************************************
Reporter Configuration File for Cucumber
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var AllureReporter = require('cucumberjs-allure-reporter');
//     XML suite files gets stored in Folder Report

AllureReporter.config(
      {
            targetDir:'Report'
      }
);


module.exports=AllureReporter;
