//Declaration of variables
var SMRPage = require('../../jasmine_POM/pages/SMRPage.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');
var LoginPage = require('../../jasmine_POM/pages/LoginPage.js')

//Data from DataSheet.xlsx
var Email = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Email');
var Password =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Password');
var url = excel.getValue('../cucumber_POM/features/Features/SMR.feature','url');

//var url = data[0].UKB83_url;
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

//Step Definitions
module.exports = function () {
  this.setDefaultTimeout(120 * 1000);

  this.When(/^User enter the email address and password and clicks on login button for \"([^\"]*)\"$/, function(singleaccount) {
    SMRPage.PerformLoginLSMR(singleaccount);
  });

  this.When(/^User navigate to submit meter read page$/, function () {
    SMRPage.Accountoverview();
  });

  this.Then(/^User should navigate to \"([^\"]*)\" account page for In-progress Account$/, function (statusofcontract) {
    SMRPage.VerifyStausOfAccountPage(statusofcontract);
  });

  this.Then(/^User should verify Submit Meter Read link in account overview page for Closed-Account$/, function () {
    SMRPage.VerifySubmitMeterReadText();
  });

  this.Then(/^User should verify the \"([^\"]*)\" error message for \"([^\"]*)\"$/, function (errormessage, accountType) {
    SMRPage.VerifyLSMRErrorMessage(errormessage,accountType);
  });

  this.When(/^User should select the \"([^\"]*)\" and search item as \"([^\"]*)\"$/, function (searchby, searchItem) {
    SMRPage.CollectiveSearchMeterDeatils(searchby, searchItem);
  });

  this.When(/^User get meter reading count, select past date and enter new meter Reading$/, function () {
    browser.controlFlow().execute(function () {
    SMRPage.VerifyMeterDeatilsPage();
    SMRPage.retrieveAndFillAccountDetailsmultiregister();
    SMRPage.DatePickerSelection();
    });
  });

  this.When(/^User get meter reading count, select past date and enter new meter Reading for multi meter$/, function () {
    browser.controlFlow().execute(function () {
    SMRPage.VerifyMeterDeatilsPage();
    SMRPage.retrieveAndFillAccountDetails();
    });
  });

  this.When(/^User click submit Button$/, function () {
    SMRPage.submitmeter();
  });

  this.Then(/^User should navigate to confirmation page$/, function () {
    SMRPage.verifyConfirmationPage();
  });

  this.Then(/^User Should verify On Demand Billing \"([^\"]*)\"$/, function (confirmationpage) {
    SMRPage.verifyODBConfirmationPage();
  });

  this.Then(/^User should click on logout button$/, function () {
    LoginPage.BrowserLogout();
  });

  this.When(/^User should select the account number from Multiple account Dash Board Section$/, function () {
    SMRPage.SelctAccountFromDashBoard();
  });

};
