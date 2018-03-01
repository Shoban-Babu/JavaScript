var Payment = function () {

    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var expect = require('expect');
    var prot=require('protractor');
    var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
    var email = element(by.name('email'));
    var password = element(by.name('password'));
    var Loginbtn = element(by.css('button.btn-submit'));
    var yourAcct = element(by.css('div.accounts-list__wrapper p[class*="account-row__account-number"]'));
    var paymentlnk = element(by.css('a[href*="card-payment"]'));
    var amtpay = element(by.name('amountToPay'));
    var paysmtbtn = element(by.css('button[class*="btn-primary"]'));
    var paycardlink = element(by.css('button[class*="btn-tertiary p-0"]'));
    var payframe = element(by.xpath("//iframe[@class='wp-cl-iframe']"));
    var cardno = element(by.xpath('//input[@name="cardNumber"]'));
    var cardname = element(by.xpath('//input[@name="cardholderName"]'));
  //  var cardno = element(by.css('iframe[class*="wp-cl-iframe"] input[name="cardNumber"]'));
  //  var cardname = element(by.css('input[name="cardholderName"]'));
    var exprmonth = element(by.css('select[name="expiryDate.expiryMonth"] option[value="05"]'));
    var expryear = element(by.css('select[name="expiryDate.expiryYear"] option[value="2019"]'));
    var scrcode = element(by.name('securityCode'));
    var finalpay = element(by.css('fieldset[class*="bottom clearfix"] input[class*="btn-make-payment"]'));
    var payconfpage = element(by.css('div.payments-page__section'));
     //div.payments-page__section h5  Confirmation

    this.load = function (url) {
        bot.launchUrl(url);
    };

    this.login = function (Email, Password) {
        bot.clickAction(Loginlink);
      //  until.waitUntilVisibility(Emailaddress);
        bot.enterText(email, Email);
        bot.enterText(password, Password);
        bot.clickAction(Loginbtn);
    };

    this.movetopay = function (Paymentamount) {
        //bot.clickAction(yourAcct);
        bot.clickAction(paymentlnk);
        bot.clearText(amtpay);
        bot.enterText(amtpay, Paymentamount );
        bot.clickAction(paysmtbtn);
    };

    this.makepayment = function (Cardno, CardName,Srccode) {
      browser.sleep(8000);
    //  bot.clickAction(paycardlink);
      //bot.switchToFrame();
      // var driver = browser.driver;
      //     var loc = by.tagName('iframe');
      //     var el = driver.findElement(loc);
      //     browser.sleep(20000);
      //     var protra=prot.getInstance();
      browser.ignoreSynchronization=true;
      browser.switchTo().frame('wp-cl-custom-html-iframe').then(function()
    {
      console.log("Swicthed to Frame");
    //  bot.clickAction(cardname);
    //  bot.clickAction(exprmonth);
    });

        //  driver.findElement(by.xpath('//input[@name="cardholderName"]')).sendKeys(CardName);
      //browser.findElement(by.name('cardholderName')).click();

      //  bot.clickAction(cardno);
        bot.enterText(cardno, Cardno);
        bot.enterText(cardname, CardName);
        bot.clickAction(exprmonth);
        bot.clickAction(expryear);
        bot.enterText(scrcode, Srccode);
        bot.clickAction(finalpay);
    };

    this.expectValue = function () {
        browser.sleep(3000);
        var status;
        if (bot.isDisplayed(payconfpage).then(function(result)
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

module.exports = new Payment();
