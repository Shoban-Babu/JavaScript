var ViewBill = function () {
    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var expect = require('expect');
    var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
    var email = element(by.name('email'));
    var password = element(by.name('password'));
    var Loginbtn = element(by.css('button.btn-submit'));
    var yourAcct = element(by.css('div.accounts-list__wrapper p[class*="account-row__account-number"]'));
    var paymentlnk = element(by.css('a[href*="card-payment"]'));
    var billingLink = element(by.css('a[href*="view-bill"]'));
    var searchBill=element(by.css('button[class*="btn btn-tertiary p-0 search-bill__heading ember-view"]'));
    var searchBill18=element(by.css('button[class*="btn btn-tertiary p-0 ember-view"]'));
    var search=element(by.css('button[class*="btn btn-secondary px-4 py-1 ember-view"]'));
    var startDate=element(by.css('div.search-bill__input-group__calender-icon [class*="form-control search-bill__input-group__start-date-input ember-view"]'))
    var endDate=element(by.css('div.search-bill__input-group__calender-icon [class*="form-control search-bill__input-group__end-date-input ember-view"]'))
    var previous=element(by.css('.pika-prev'))
    var previousNextDate=element(by.xpath('//body/div[7]//*[@class="pika-prev"]'))
    var prevDate=element(by.xpath('//div[@class="pika-lendar"]//table//tr[2]/td[5]'))
    var nextDate=element(by.xpath('//body/div[7]//*[@class="pika-lendar"]//table//tr[2]/td[5]'))
    var billdet=element(by.xpath('//div[@class="inner-table-wrapper"]//tr[1]//td[2]'))
    var pagenation=element(by.css('.pagination__page-link'))
    var tablesize= element.all(by.xpath('//*[@class="inner-table-wrapper"]/table/tbody/tr'))
    var view=element(by.xpath('.//div[@class="inner-table-wrapper"]//tr[1]//td[6]//span'))
    var closeButton=element(by.xpath('//i[@class="fa fa-times circle-close circle-close--white ml-2"]'))
    var tcount = "";
    var pcount ="";
    var totclick= "";
    var date="";
    var type="";
    var billnumber="";
    var amount="";
  //  var vdate="";
    var vtype="";
    var vbillnumber="";
    var vamount="";
    var log4js = require('log4js');
    var logger = log4js.getLogger();

//    var pcount date,vdate,billNumber,vBillNumber,amount,vAmount,tcount;

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

    this.movetoBills = function () {
        bot.clickAction(billingLink);
        browser.sleep(4000);
    };

    this.clickSearchBill = function () {
      bot.clickAction(searchBill18);
    };

    this.selectFromDate = function () {
      bot.clickAction(startDate);
      for (var i = 0; i <=11; i++) {
        bot.clickAction(previous);
      }
      bot.clickAction(prevDate);
    };

    this.selectToDate = function () {
        browser.sleep(3000);
      bot.clickAction(endDate);
      for (var i = 0; i <=11; i++) {
        bot.clickAction(previousNextDate);
      }
      bot.clickAction(nextDate);
      browser.sleep(3000);
    };

    this.clickBillSearch = function () {
      browser.executeScript('window.scrollTo(0,200);').then(function () {
      });
        bot.clickAction(search);
        browser.sleep(10000);
        element.all(By.xpath('//*[@class="inner-table-wrapper"]/table/tbody/tr')).then(function(count)
        {
          tcount= count.length;
          //console.log(tcount)
          logger.info("$%$%$%$:"+tcount);

        });
          element.all(By.css('.pagination__page-link')).then(function(items)
          {
            pcount=items.length;
            logger.info("******:"+pcount);
          });
  };

    this.clickViewBill = function () {
      browser.sleep(2000);
         logger.info("$%$%$%$ in am in loop:"+tcount+ "view count "+pcount);
        // logger.info("******:"+pcount);
        totcount=pcount-2;
          for (var j = 0; j <totcount; j++)
          {


          for(var i=1;i<=tcount;i++)
          {

            date = bot.getText(element(by.xpath('.//div[@class="inner-table-wrapper"]//tr['+i+']//td[2]')));
            logger.info("*********** "+date);


          /*  billnumber=element(by.xpath('.//div[@class="inner-table-wrapper"]//tr['+i+']//td[4]')).getText();
            amount=element(by.xpath('.//div[@class="inner-table-wrapper"]//tr['+i+']//td[5]')).getText();

            logger.info("The date for "+i+" element is"+ date);
            logger.info("The billnumber for "+i+" element is"+ billnumber);
            logger.info("The amount for "+i+" element is"+ amount);*/

          element(by.xpath('.//div[@class="inner-table-wrapper"]//tr['+i+']//td[6]//span')).click();
          var vdate=element(by.xpath('//div[@class="col-md-2 p-0 bill-overlay__invoice-detail"]//span')).getText();
          vbillnumber=element(by.xpath('//div[@class="col-md-3 bill-overlay__invoice-detail"]//span')).getText();
          vamount=element(by.xpath('//div[@class="col-md-3 p-0 bill-overlay__invoice-detail"]//span')).getText();

        /*logger.info("The date for "+i+" element after clicking on view is"+ vdate);
          logger.info("The amount for "+i+" element after clicking on view is"+ vbillnumber);
          logger.info("The amount for "+i+" element after clicking on view is"+ vamount);*/

          browser.sleep(5000);
          bot.clickAction(closeButton);
          browser.sleep(2000);
        }
        element(by.css('.table-footer button:nth-child('+pcount+')')).click();
        }


    };



};


module.exports = new ViewBill();
