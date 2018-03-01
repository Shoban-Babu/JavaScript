/**********************************************************
Step File for All User Feature Files
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
//Declaration of variables
var ViewBill = require('../../jasmine_POM/pages/ViewBill.js');
var Login = require('../../jasmine_POM/pages/LoginPage.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');

//Data from DataSheet.xlsx
var Email = excel.getValue('../cucumber_POM/features/ViewBills.feature','Email');
var Password = excel.getValue('../cucumber_POM/features/Payment.feature','Password');
/*var Paymentamount = excel.getValue('../cucumber_POM/features/Payment.feature','Paymentamount');
var Cardno = excel.getValue('../cucumber_POM/features/Payment.feature','Cardno');
var CardName = excel.getValue('../cucumber_POM/features/Payment.feature','CardName');
var Srccode = excel.getValue('../cucumber_POM/features/Payment.feature','Srccode');
var url = data[0].UKB83_url;
var expectedValue = excel.getValue('../cucumber_POM/features/Payment.feature','Value');
*/
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {

  this.setDefaultTimeout(60 * 1000);

      /*   this.Given(/^the url to perform Login$/, function () {
           Login.load(url);
         });


         this.When(/^User  navigate to business Login page$/, function () {
            // Write code here that turns the phrase above into concrete actions
            Login.navigate();
          });

         this.When(/^User  enter the email address and password and clicks on login button$/, function () {
           Login.login (Email, Password);
         });
*/

         this.When(/^User clicks on billing link$/, function () {
        ViewBill.movetoBills();
         });


         this.When(/^User clicks on Search in bills$/, function () {
         ViewBill.searchBill();
         });


         this.Then(/^User bills should be displayed$/, function () {
         ViewBill.searchBill();
         });

         this.When(/^User clicks on previous option$/, function () {
         ViewBill.clickPrevious();
         ViewBill.clickNext();
         ViewBill.clickBillSearch();
        // ViewBill.validateBills();
         });
};
