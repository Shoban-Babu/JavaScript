    var Login = function () {

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var expect = require('expect');

    //************************************** Object Locators on Page ******************************************

    var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
    var email = element(by.name('email'));
    var password = element(by.name('password'));
    var Loginbtn = element(by.css('button.btn-submit'));
    var acctlink = element(by.xpath('//*[@class="account-row__fuel-type-icon fa ukb-icon-gas"]'));
    var Acctlable = element(by.css('span[class="pr-2"]'));
    var Acctlable1 = element(by.css('div.account-nav__heading-wrapper strong'));
     var reporteroption=require('../../helper/ReporterOptions.js');
     var Logoutlink = element(by.css('div.ukb-head-topnav  a[href*="logmeout"]'));

     var AuthError = element(by.css('div.ukb-registration--error-text h5[class="red p-0 my-0"] b'));
     var cookiesclose = element(by.css('div.cookie-warning span.fa-close'));
     var cookie1 = element(by.css('span[class="pointer fa fa-close"]'));


    var dbConfig = require('../../helper/DBConnection.js');
    this.load = function (url) {

          reporteroption.addEnvironment(url);

          reporteroption.addLabel('Launch URL');

       return  bot.launchUrl(url);
    };

  /*  this.navigatelogin = function () {
        return bot.clickAction(Loginlink);


    };  */

    this.navigatelogin = function () {

      var status;
      bot.isDisplayed (Logoutlink).then(function()
      {
        bot.clickAction(Logoutlink);
        console.log('logout clicked');
         browser.sleep(2000);
         console.log('login clicked');
        return bot.clickAction(Loginlink);

      }, function(err){
        console.log('login clicked');
        return bot.clickAction(Loginlink);

      });
    };

    this.closecookies = function () {

      var status;
      bot.isDisplayed (cookiesclose).then(function()
      {
        return bot.clickAction(cookiesclose);

      });
    };

    this.login = function (Email, Password) {

  /*    bot.isDisplayed(cookie1).then(function(element1){
      return bot.clickAction(Acctlable1)
       })
      }; */

      bot.enterText(email,Email);
      bot.enterText(password,Password);
        //bot.enterText(email,"gopinath.muthukrishnan@cognizant.com");
      //  bot.enterText(password, "password12");
      //  bot.enterText(email,"bgbwp43@wp.com");
     //  bot.enterText(password, "password123");


       return bot.clickAction(Loginbtn);
    };
    this.Accountoverview = function () {
       bot.clickAction (acctlink);


       bot.isDisplayed(Acctlable1);
    return bot.getText(Acctlable1).then(function(element1){
     if(element1 === "Accounts"){
       console.log('Account present');
     }
    });



     };

     this.logout = function () {


      return bot.clickAction(Logoutlink);
    };


    this.invalidlogin = function () {
        bot.enterText(email,"bgbwp43eredfeeewew@wp.com");
        bot.enterText(password, "password123");

        return bot.clickAction(Loginbtn);
     };


/*  this.EmailError = function () {
// var error1 =bot.getText(AuthError);
   return bot.getText(AuthError).then(function(element1){
    if(element1 === "Oops, it looks like something went wrong"){
     // console.log(error1);
    }}, function(err){
      console.log('Incorrect Validation message');
 reporteroption.reportFail("Incorrect Validation message displayed");

    });
    }; */

this.EmailError = function () {
//var error2 = 'Oops, it looks like something went wrong';

 // return  expect(AuthError.getText()).toEqual("Oops, it looks like something went wrong");


 var status;
  bot.isDisplayed (AuthError);


  return  AuthError.getText().then(function (text) {
      var error1 = text;

      console.log(error1);

      if(error1 === "Oops, it looks like something went wrong"){
        console.log('Email validation  present');
        reporteroption.reportPass("Email validation displayed as expected");

      }  else {
    console.log('Email validation not present');
    reporteroption.reportFailStep("Email validation  not displayed as expected");

     }
  // logger.info("Verifying the Element - fail";

    });


/*  AuthError.getText().then(function (text) {
    var error1 = text;

    console.log(error1);

    if(error1 === "Oops, djhefhesit looks like something went wrong"){
      console.log('Email validation not present');
      reporteroption.reportPass("Email validation displayed as expected");

    }
   else {
  console.log('Email validation not present');
  reporteroption.reportFailStep("Email validation  not displayed as expected");

   }
// logger.info("Verifying the Element - fail";

  });  */

 /*  return bot.getText(AuthError).then(function(element1){
    if(element1 === "Oops, it looks like something went wrong");{
      console.log('Email validation present');
    }
   });*/
  };

this.logout = function () {


     return bot.clickAction(Logoutlink);
   };

};
module.exports = new Login();
