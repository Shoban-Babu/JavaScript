
var Login = require('../../jasmine_POM/pages/LoginPage.js');
var data = require('../../data/testdata.json');
var AsmrPage = require('../../jasmine_POM/pages/ASMRPage.js');
var url = data[0].UKB111_url_ASMR;
var cache = element(by.css('.fa-close'));

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

module.exports = function ()
{

this.setDefaultTimeout(120 * 1000);

  this.Given(/^the url to perform ASMR$/, function (){
         return  Login.load(url);
  });

  this.Given(/^user should navigate to the SMR page$/, function (){
         AsmrPage.NavigateToSMRPage();
         AsmrPage.VerifySMRTitle();
  });

  this.When(/^user should enter the account Number,postcode,email address for \"([^\"]*)\"$/, function (invalidpostcode) {
        AsmrPage.FetchingInputs(invalidpostcode);
        AsmrPage.ClickNextButton();
  });

  this.Then(/^user should verify \"([^\"]*)\" error message for \"([^\"]*)\"$/, function (errormessage,message) {
          AsmrPage.WaitforErrorMessage();
          AsmrPage.ErrorValidation(errormessage,message);
  });

 this.Then(/^user should verify UI error message with invalid details$/, function () {
        AsmrPage.ClientSideError();
  });

  this.Then(/^user should verify Account Number, Fuel Type and Meter serial number from meter details page$/, function () {
      AsmrPage.ClickNextButton();
      AsmrPage.verifySMRpage();
  });

  this.Then(/^user should submit the meter read for Single Registers$/, function () {

      AsmrPage.retriveMeterDetails_MultipleReigiter();
      AsmrPage.DatePickerSection();
  });

  this.Then(/^user should click submit button$/, function () {
    AsmrPage.SubmitButton();
 });

 this.Then(/^user verify the \"([^\"]*)\" page title and Updated meter read values$/, function (confirmation) {
   AsmrPage.VerifyConfirmationPage(confirmation);
  });

  this.Then(/^user should submit the meter read for Multi Meters$/, function () {
    AsmrPage.retrieveAndFillAccountDetails_MultiMeter();
  });

  this.Then(/^user should submit a meter read reminder$/, function () {
      AsmrPage.GetRemiderVerfication();
      AsmrPage.SubmitReminderForm();
      AsmrPage.VerificationReminderSubmission();
 });

 this.Then(/^user should verify submitted message in meter details Section for \"([^\"]*)\"$/, function (meterreadsubmittedontheday){
      AsmrPage.VerifyAlreadySubmitted();
  });

};
