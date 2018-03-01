/**********************************************************
Step File for All User Feature Files
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
//Declaration of variables
var PaymentPage = require('../../jasmine_POM/pages/PaymentPage.js');
var Login = require('../../jasmine_POM/pages/LoginPage.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');

//Data from DataSheet.xlsx
var Email = excel.getValue('../cucumber_POM/features/Features/Payment.feature','Email');
var Password = excel.getValue('../cucumber_POM/features/Features/Payment.feature','Password');
var Paymentamount = excel.getValue('../cucumber_POM/features/Features/Payment.feature','Paymentamount');
var Cardno = excel.getValue('../cucumber_POM/features/Features/Payment.feature','Cardno');
var CardName = excel.getValue('../cucumber_POM/features/Features/Payment.feature','CardName');
var Srccode = excel.getValue('../cucumber_POM/features/Features/Payment.feature','Srccode');
var url = data[0].UKB83_url;
var expectedValue = excel.getValue('../cucumber_POM/features/Payment.feature','Value');

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {

  this.setDefaultTimeout(60 * 1000);

         // this.Given(/^the url to perform Login$/, function () {
         //   Login.load(url);
         // });


         // this.When(/^User  navigate to business Login page$/, function () {
         //    // Write code here that turns the phrase above into concrete actions
         //    Login.navigate();
         //  });
         //
         // this.When(/^User  enter the email address and password and clicks on login button$/, function () {
         //   Login.login (Email, Password);
         //});

         this.When(/^User  clicks the make a payment link$/, function () {
           PaymentPage.movetopay(Paymentamount);
         });

         this.When(/^User enter the payment card details and pay link displayed$/, function () {
           PaymentPage.makepayment(Cardno, CardName,Srccode);
         });

        this.Then(/^User payment confirmation page should be displayed$/, function () {
           PaymentPage.expectValue();
         });


};
