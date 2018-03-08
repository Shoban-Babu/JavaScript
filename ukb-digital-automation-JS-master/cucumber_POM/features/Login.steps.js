
//Declaration of variables
var Login = require('../../jasmine_POM/pages/LoginPage.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');
var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
var cookie1 = element(by.css('span[class="pointer fa fa-close"]'));
//Data from DataSheet.xlsx
var Email = excel.getValue('../cucumber_POM/features/Features/Login.feature','Email');
var Password =excel.getValue('../cucumber_POM/features/Features/Login.feature','Password');
var url = data[0].UKB83_url;

//var url = excel.getValue('../cucumber_POM/features/Features/SMR.feature','url');
//var Email = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Email');
//var Password =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Password');

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

//Step Definitions
  module.exports = function () {
  this.setDefaultTimeout(120 * 1000);

   this.Given(/^the url to perform Login$/, function () {
    return  Login.load(url);
   });

  this.When(/^User  navigate to business Login page$/, function () {
   Login.navigatelogin();
   return Login.closecookies();

  });


    this.When(/^User  enter the email address and password and clicks on login button$/, function () {

     return Login.login (Email, Password);
     // Login.login ("bgbwp43@wp.com", "password123");


  });


  this.Then(/^User should navigate to Account overview page$/, function () {
   return Login.Accountoverview();


  });
  this.Then(/^User signed out from the application\.$/, function () {

   return Login.logout();

  });

  this.When(/^User  enter the invalidemail address and password and clicks on login button$/, function () {
    return Login.invalidlogin ();

  });

  this.Then(/^User will get authentication error \"([^\"]*)\".$/, function (oopsitlookslikesomethingwentwrong) {
    return Login.EmailError();

  });


};
