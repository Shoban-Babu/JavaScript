
//Declaration of variables
var Multimeter = require('../../jasmine_POM/pages/Multimeter.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');

//Data from DataSheet.xlsx
var Email = excel.getValue('../cucumber_POM/features/Multimeter.feature','Email');
var Password =excel.getValue('../cucumber_POM/features/Multimeter.feature','Password');
var url = data[0].UKB83_url;

//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
module.exports = function () {
  this.setDefaultTimeout(120 * 1000);

  // this.Given(/^the url to perform Login$/, function () {
  //   Multimeter.load(url);
  // });


//  this.When(/^User  navigate to business Registration page$/, function () {
  // Write code here that turns the phrase above into concrete actions
//  Multimeter.navigate();
//});


//   this.When(/^User  enter the email address and password and clicks on login button$/, function () {
//   // Write code here that turns the phrase above into concrete actions
//   Multimeter.login(Email, Password);
// });

  // this.When(/^User navigate to submit meter read page$/, function () {
  //   Multimeter.Accountoverview();
  // });

//   this.When(/^User get meter reading count, select past date and enter new meter Reading$/, function () {
//     browser.controlFlow().execute(
//           function () {
//     Multimeter.retrieveAndFillAccountDetails();
//     browser.sleep(20000);
//   });
//   });
//
//   this.When(/^User click submit Button$/, function () {
//     //callback(null, 'pending');
//   });
//
//   this.Then(/^User should navigate to confirmation page\.$/, function () {
//   //callback(null, 'pending');
// });


};
