  var Register = function () {

       var log4js = require('log4js');
       var logger = log4js.getLogger();
       var bot = require('../../helper/BrowserBot.js');
       var until = require('../../helper/Until.js');
       var excel = require('../../helper/excelread.js');
       var reporteroption=require('../../helper/ReporterOptions.js');
       var expect = require('expect');
       //************************************** Feature details from DataSheet.xlsx ******************************************
       var FeatureName = excel.getValue('../cucumber_POM/features/Features/Registration.feature','Featurename');
       var Priority = excel.getValue('../cucumber_POM/features/Features/Registration.feature','Priority');

         //************************************** Object Locators on Page ******************************************

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
       var emailerror = element(by.css('div.form-control-feedback'));

      this.load = function (url) {
        return  bot.launchUrl(url);
      };

      this.navigate = function () {

        reporteroption.addFeature(FeatureName);
        reporteroption.addSeverity(Priority);
        return  bot.clickAction(Registerlnk);

      };
      this.Maildetails = function (RegisterEmail) {

      /*  bot.enterText(Email,"bgbwp4312@wp.com");
        bot.enterText(confirmemail, "bgbwp4312@wp.com");
        bot.clickAction(nextbtn);  */

        bot.enterText(Email,RegisterEmail);
        bot.enterText(confirmemail,RegisterEmail );
        return  bot.clickAction(nextbtn);
      };
      this.Acctdetails = function (Acctno, Postcode) {
        bot.enterText(acctno, Acctno);
        bot.enterText(postcode, Postcode);
        return  bot.clickAction(nextbtn);


    };

    this.Securitykey = function (Securitycode) {

        bot.enterText(SrcAns, Securitycode);
        return  bot.clickAction(nextbtn);

    };
    this.personaldetails = function (Firstname, Lastname,Phoneno,Password) {
        bot.clickAction(title);
        bot.clickAction(Titleselection);
        bot.enterText(firstname, Firstname);
        bot.enterText(lastname, Lastname);
        bot.enterText(phonenumber, Phoneno);
        bot.enterText(password, Password);
        bot.clickAction(Termsandcondition);
        return  bot.clickAction(submit);

    };

    this.expectValue = function () {

        var status;
        return  bot.isDisplayed (confmsg).then(function(result)

          {
            console.log("Registration confirmation"+result);
   
        reporteroption.reportPass("Registration confirmation displayed as expected");
           //logger.info("Verifying the Element - pass" );
  
           },function(err){
             console.log("False"+result);
      reporteroption.reportFailStep("Registration confirmation not displayed as expected");
  
       
       // logger.info("Verifying the Element - fail";
  
      });
    };


    this.WrongMaildetails = function () {

        bot.enterText(Email,"bgbwp43122323com");
       // bot.enterText(confirmemail, "bgbwp43122323com");
       return  bot.clickAction(confirmemail);  

      };

      this.expectErrorValue = function () {
        
        var status;
 /*       bot.isDisplayed (emailerror).then(function(result)

          {
            console.log("Registration `email address is wrong - confirmation"+result);
   
        reporteroption.reportPass("Registration Email error message  displayed as expected");
           //logger.info("Verifying the Element - pass" );
  
           },function(err){
             console.log("False"+result);
      reporteroption.reportFailStep("Registration Email error message  not displayed as expected");
  
       
       // logger.info("Verifying the Element - fail";
  
      });
    };  */

    return emailerror.getText().then(function (text) {
            var error1 = text;

            console.log(error1);

            if(error1 === "Please enter a valid email address"){
             // Please enter a valid email address
              console.log('Email validation  present');
              reporteroption.reportPass("Email validation displayed as expected");

            }  else {
          console.log('Email validation not present');
          reporteroption.reportFail("Email validation message displayed as" + error1 +". Expected :Please23434 enter a valid email address" );

          }
        // logger.info("Verifying the Element - fail";

          }); 
          
        };
      };
  module.exports = new Register();
