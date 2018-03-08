/**********************************************************
Step File for All User Feature Files
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
//Declaration of variables
var PaymentPage = require('../../jasmine_POM/pages/PaymentPage.js');
var SMRPage = require('../../jasmine_POM/pages/SMRPage.js');
var Login = require('../../jasmine_POM/pages/LoginPage.js');
var excel = require('../../helper/excelread.js');
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

      this.When(/^User enter the email address and password and clicks on login button for \"([^\"]*)\" for payment$/, function (arg) {
             PaymentPage.PerformLoginPayment(arg);
      });

      this.When(/^User clicks the make a payment link$/, function () {
            PaymentPage.movetopay(Paymentamount);
      });

      this.Then(/^User should verify payment Page, enter the payment amount as \"([^\"]*)\"$/, function (arg) {
        PaymentPage.verifyPaymentSection();
        PaymentPage.EnterPaymentAmount(arg);
        PaymentPage.PaymentContinueButton();
        PaymentPage.VerifySavedCardSection();
      });

      this.Then(/^User should verify the World pay Screen and enter the card details$/, function () {
          PaymentPage.VerifyWorldPayPage();
          PaymentPage.EnterCardDetails();
      });

      this.When(/^User enter the payment card details and pay link displayed$/, function () {
            PaymentPage.VerifySavedCardSection();
            PaymentPage.makepayment(Cardno, CardName,Srccode);
      });

      this.Then(/^User should verify the confirmation page$/, function () {
             PaymentPage.ConfirmationPageValidation();
      });

      this.When(/^User clicks the Manage Payment Cards$/, function () {
            PaymentPage.MoveToManageCards();
      });

      this.Then(/^User should verify the Manage Payment Cards page$/, function () {
           PaymentPage.verifyManageCardSection();
      });


      this.Then(/^User should add the payment card details up to sixteen cards$/, function () {
          PaymentPage.GettingCardDetails();
      });

};
