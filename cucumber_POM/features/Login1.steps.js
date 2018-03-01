
//Declaration of variables
var SMRPage = require('../../jasmine_POM/pages/SMRPage.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');
var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));

//Data from DataSheet.xlsx
//var Email = excel.getValue('../cucumber_POM/features/SMR.feature','Email');
//var Password =excel.getValue('../cucumber_POM/features/SMR.feature','Password');
var url = data[0].UKB83_url;

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {
  this.setDefaultTimeout(120 * 1000);

  // this.Given(/^the url to perform Login$/, function () {
  //   SMRPage.load(url);
  // });

  // this.When(/^User navigate to business Login page$/, function () {
  //  bot.clickAction(Loginlink);
  //
  // });

};
