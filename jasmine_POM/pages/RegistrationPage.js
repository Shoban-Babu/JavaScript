  var Register = function () {

       var log4js = require('log4js');
       var logger = log4js.getLogger();
       var bot = require('../../helper/BrowserBot.js');
       var until = require('../../helper/Until.js');
       var excel = require('../../helper/excelread.js');
       var expect = require('expect');
       var Registerlnk = element(by.css('div.ukb-head-topnav  a[href*="register"]'));
       var Email = element(by.name('email'));
       var confirmemail = element(by.name('emailConfirmation'));
       var nextbtn = element(by.css('.btn.btn-outline-primary.submit-button'));
       var acctno = element(by.name('accountNo'));
       var postcode = element(by.name('postcode'));
       var SrcAns = element(by.css('div[class="row mt-2 ml-0"] input[name="paymentCard"]'));
       var title = element(by.css('.select2-chosen'));
       var Titleselection = element(by.css('div.select2-result-label:nth-of-type(1)'));
       var firstname = element(by.name('firstName'));
       var lastname = element(by.name('lastName'));
       var phonenumber = element.all(by.name('phoneNumber'));
       var password = element(by.name('password'));
       var Termsandcondition = element(by.css('div.check-box-check'));
       var submit = element(by.css('.btn.btn-submit'));
       var confmsg = element(by.css('div.ukb-registration h3[class="ukb-registration-title"]'));

      this.load = function (url) {
          bot.launchUrl(url);
      };

      this.navigate = function () {
          bot.clickAction(Registerlnk);

      };
      this.Maildetails = function (RegisterEmail) {

      /*  bot.enterText(Email,"bgbwp4312@wp.com");
        bot.enterText(confirmemail, "bgbwp4312@wp.com");
        bot.clickAction(nextbtn);  */

        bot.enterText(Email,RegisterEmail);
        bot.enterText(confirmemail,RegisterEmail );
        bot.clickAction(nextbtn);
      };
      this.Acctdetails = function (Acctno, Postcode) {
        bot.enterText(acctno, Acctno);
        bot.enterText(postcode, Postcode);
        bot.clickAction(nextbtn);


    };

    this.Securitykey = function (Securitycode) {

        bot.enterText(SrcAns, Securitycode);
        bot.clickAction(nextbtn);

    };
    this.personaldetails = function (Firstname, Lastname,Phoneno,Password) {
        bot.clickAction(title);
        bot.clickAction(Titleselection);
        bot.enterText(firstname, Firstname);
        bot.enterText(lastname, Lastname);
        bot.enterText(phonenumber, Phoneno);
        bot.enterText(password, Password);
        bot.clickAction(Termsandcondition);
        bot.clickAction(submit);

    };

    this.expectValue = function () {

        var status;
        if (bot.isDisplayed (confmsg).then(function(result)
      {
        if(result=="true")
        reporter.reportPass("Value displayed as expected");
      })) {
            return true;
        }
        else {
            return false;

        }
    };


};

  module.exports = new Register();
