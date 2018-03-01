
//Declaration of variables
var Login = require('../../jasmine_POM/pages/LoginPage.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');
var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
//Data from DataSheet.xlsx
var Email = excel.getValue('../cucumber_POM/features/Features/Login.feature','Email');
var password =excel.getValue('../cucumber_POM/features/Features/Login.feature','Password');
var url = data[0].UKB141_url;

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {
  this.setDefaultTimeout(120 * 1000);

   this.Given(/^the url to perform Login$/, function () {
     Login.load(url);
   });

  this.When(/^User navigate to business Login page$/, function () {
    // Write code here that turns the phrase above into concrete actions
    Login.navigate();
  });

  // this.When(/^User enter the email address and password and clicks on login button$/, function () {
    // Write code here that turns the phrase above into concrete actions
    // Login.login(Email,password );
   //});
  this.Then(/^User should navigate to Account overview page\.$/, function () {
    // Write code here that turns the phrase above into concrete actions
    Login.Accountoverview();
  });

};
