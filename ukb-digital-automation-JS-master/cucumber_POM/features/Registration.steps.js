

//Declaration of variables

var Login = require('../../jasmine_POM/pages/LoginPage.js');
var Register = require('../../jasmine_POM/pages/RegistrationPage.js');
var untilPage = require('../../helper/Until.js');
var excel = require('../../helper/excelread.js');
var using = require('jasmine-data-provider');
var data = require('../../data/testdata.json');
var bot = require('../../helper/BrowserBot.js');

//Data from DataSheet.xlsx
var EmailPart1 = excel.getValue('../cucumber_POM/features/Features/Registration.feature','Email');
var datetime = bot.reportpathTimeStamp();
var RegisterEmail = EmailPart1+datetime+"@wp.com";
var Acctno =excel.getValue('../cucumber_POM/features/Features/Registration.feature','Acctno');

var Postcode = excel.getValue('../cucumber_POM/features/Features/Registration.feature','Postcode');
var Securitycode =excel.getValue('../cucumber_POM/features/Features/Registration.feature','LastFourDigit');
var Firstname = excel.getValue('../cucumber_POM/features/Features/Registration.feature','Firstname');
var Lastname =excel.getValue('../cucumber_POM/features/Features/Registration.feature','Lastname');
var Phoneno = excel.getValue('../cucumber_POM/features/Features/Registration.feature','Phoneno');
var Password =excel.getValue('../cucumber_POM/features/Features/Registration.feature','Password');
var msgconf =excel.getValue('../cucumber_POM/features/Features/Registration.feature','value');
var url = data[0].UKB141_url;
//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger('info');

//Step Definitions
  module.exports = function () {
  this.setDefaultTimeout(120 * 1000);

  this.Given(/^User is on \"([^\"]*)\"$/, function (url) {
  return  Register.load(url);
   });

   this.When(/^User navigates to Register page$/, function () {
    return   Register.navigate();
  });


  this.When(/^User enter the email address and click on Next button$/, function () {
    return  Register.Maildetails(RegisterEmail);
  });

  this.When(/^User give the Account details and click on Next button$/, function () {
    Register.Acctdetails(Acctno,Postcode);
    Register.Securitykey(Securitycode);
    return  Register.personaldetails(Firstname, Lastname,Phoneno, Password);

  });


  this.Then(/^the activation email message should be displayed$/, function () {
    browser.sleep(2000);

    return  Register.expectValue();

  });  

  this.When(/^User enter the invalidemail address and click on Next button$/, function () {
    return  Register.WrongMaildetails();
  });



  this.Then(/^User will get registration error \"([^\"]*)\".$/, function (pleaseenteravalidemailaddress) {
    return  Register.expectErrorValue();
  });
};
