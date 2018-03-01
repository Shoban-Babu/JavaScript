

//Declaration of variables

var Login = require('../../jasmine_POM/pages/LoginPage.js');
var Register = require('../../jasmine_POM/pages/RegistrationPage.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');
var bot = require('../../helper/BrowserBot.js');

//Data from DataSheet.xlsx
var EmailPart1 = excel.getValue('../cucumber_POM/features/Register.feature','Email');
var datetime = bot.reportpathTimeStamp();
var RegisterEmail = EmailPart1+datetime+"@wp.com";
var Acctno =excel.getValue('../cucumber_POM/features/Register.feature','Acctno');
var Postcode = excel.getValue('../cucumber_POM/features/Register.feature','Postcode');
var Securitycode =excel.getValue('../cucumber_POM/features/Register.feature','LastFourDigit');
var Firstname = excel.getValue('../cucumber_POM/features/Register.feature','Firstname');
var Lastname =excel.getValue('../cucumber_POM/features/Register.feature','Lastname');
var Phoneno = excel.getValue('../cucumber_POM/features/Register.feature','Phoneno');
var Password =excel.getValue('../cucumber_POM/features/Register.feature','Password');
var msgconf =excel.getValue('../cucumber_POM/features/Register.feature','value');
var url = data[0].UKB41_url;
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

//Step Definitions
  module.exports = function () {
  this.setDefaultTimeout(120 * 1000);


  this.Given(/^the url to perform Registration$/, function (callback) {
Register.load(url);

});

this.When(/^User navigates to Register page$/, function (callback) {
Register.navigate();

});

this.When(/^User enter the email address and click on Next button$/, function (callback) {
 Register.Maildetails(RegisterEmail);

});

this.When(/^User enter the Account number Postcode and click on Next button$/, function (callback) {
  Register.Acctdetails(Acctno, Postcode);
});

this.When(/^User enter security question for last amount paid and click on Next button$/, function (callback) {
  Register.Securitykey(Securitycode);
});

this.When(/^User enter Contact details check Terms and Conditions and submit the registration form$/, function (callback) {
  Register.personaldetails(Firstname, Lastname,Phoneno,Password);
});

this.Then(/^the activation email message should be displayed$/, function (callback) {
  Register.expectValue();
});


};
