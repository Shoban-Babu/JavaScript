/**********************************************************
Step File for All User Feature Files
Framework : Protractor Automation Framework 
Created By: CMT SAT Team
**********************************************************/ 
//Declaration of variables
var calculatorPage = require('../../jasmine_POM/pages/CalculatorPage.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');

//Data from DataSheet.xlsx
var firstvalue = excel.getValue('../cucumber_POM/features/Addition.feature','FirstValue');
var secondvalue =excel.getValue('../cucumber_POM/features/Addition.feature','SecondValue');
var url = data[0].calculator_url;
var expectedValue = excel.getValue('../cucumber_POM/features/Addition.feature','ExpectedValue');

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions 
module.exports = function () {

  this.setDefaultTimeout(60 * 1000);
  this.Given(/^the url to perform Addition$/, function () {

    calculatorPage.load(url);
  });

  this.When(/^numbers are entered for Addition$/, function () {

    calculatorPage.add(firstvalue, secondvalue);
  });

  this.Then(/^the result of Addition should be displayed$/, function () {
    logger.info("Addition Result is displayed");
  });

  this.Given(/^the url to perform Subtraction$/, function () {
    calculatorPage.load(url);
  });

  this.When(/^numbers are entered for Subtraction$/, function () {
    calculatorPage.subtraction(firstvalue, secondvalue);
  });
  this.Then(/^the result of Subtraction should be displayed$/, function () {
    logger.info("Subtraction Result is displayed");
  });

  this.Given(/^the url to perform Multiplication$/, function () {
    calculatorPage.load(url);
  });
  this.When(/^numbers are entered for Multiplication$/, function () {
    calculatorPage.multiplication(firstvalue, secondvalue);
  });
  this.Then(/^the result of Multiplication should be displayed$/, function () {
    logger.info("Multiplication Result is displayed");
  });

  this.Given(/^the url to perform Division$/, function () {
    calculatorPage.load(url);
  });

  this.When(/^numbers are entered for Division$/, function () {
    calculatorPage.division(firstvalue, secondvalue);
  });

  this.Then(/^the result of Division should be displayed$/, function () {
    logger.info(" Division Result is displayed");
  });
};
