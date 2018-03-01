var Login = function () {

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var expect = require('expect');
    var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
    var email = element(by.name('email'));
    var password = element(by.name('password'));
    var Loginbtn = element(by.css('button.btn-submit'));
    var acctlink = element(by.xpath('//*[@class="account-row__fuel-type-icon fa ukb-icon-gas"]'));
    var Acctlable = element(by.css('span[class="pr-2"]'));
    var Acctlable1 = element(by.css('div.account-nav__heading-wrapper strong'));
    var cache = element(by.css('.fa-close'));
    var logout = element(by.css('#quickLinks a[href*="logmeout"]'));
    var LogOutButtonPosition = element(by.css('.logout-panel button'))

    this.load = function (url) {
        bot.launchUrl(url);
        // try {
        //   if(cache.isDisplayed())
        //   {
        //     cache.click();
        //   }
        // }
        // catch(e) {
        //   logger.info("Cache section is not there in the application"+e.stack);
        // }
        // finally
        // {
        //     logger.info("Cache section is not there in the application");
        // }
    };

    this.BrowserLogout = function()
    {
         browser.actions().sendKeys(protractor.Key.HOME).perform();
         bot.clickAction(logout);
         until.waitUntilElementToBeClickable(LogOutButtonPosition);
    };



    this.navigate = function () {
        bot.clickAction(Loginlink);
    };
    this.login = function (Email, Password) {
      bot.enterText(email,Email);
      bot.enterText(password,Password);
        //bot.enterText(email,"shobanbabu.manohar@cognizant.com");
      //  bot.enterText(email,"gopinath.muthukrishnan@cognizant.com")
        //bot.enterText(password, "password12");
        bot.clickAction(Loginbtn);
    };
  //   this.Accountoverview = function () {
  //      bot.clickAction (acctlink);
  //     // return expect(Acctlable1.getAttribute('value')).toEqual('account-nav__heading-wrapper');
  //   //  return expect(Acctlable1.getText()).toEqual('Accounts');
  //   //  return expect(Acctlable1.getText()).toBe('Accounts');
  //   //  return expect(Acctlable1.isPresent()).toBe(true);
  // //  return  expect(Acctlable1.isPresent());
  // //   return Acctlable.click();
  //
  //    var element1 = bot.getText(Acctlable1);
  //    if(element1 === "Accounts");{
  //      console.log('Account present');
  //    }

     //expect(element.getText()).toEqual('Your meter reading is complete.')


    //  expect(Acctlable.getAttribute ('value')).toEqual('Accounts');
    //  expect(strong.getAttribute('class')).toEqual('account-nav__heading');

    //  expect(Acctlable.isDisplayed()).toBe(true);

     //};

};
module.exports = new Login();
