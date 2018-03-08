var PaymentPage = function () {
    var expect = require('expect');
    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var LoginPage = require('../../jasmine_POM/pages/LoginPage.js');
    var expect = require('expect');
    var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
    var email = element(by.name('email'));
    var password = element(by.name('password'));
    var Loginbtn = element(by.css('button.btn-submit'));
    var yourAcct = element(by.css('div.accounts-list__wrapper p[class*="account-row__account-number"]'));
    var paymentlnk = element(by.css('a[href*="card-payment"]'));
    var managecardsLink = element(by.css('a[href*="manage-cards"]'))
    var amountToPay = element(by.name('amountToPay'));
    var paysmtbtn = element(by.css('button[class*="btn-primary"]'));
    var paycardlink = element(by.css('button[class*="btn-tertiary p-0"]'));
    var payframe = element(by.xpath("//iframe[@class='wp-cl-iframe']"));
    var cardno = element(by.xpath('//input[@name="cardNumber"]'));
    var cardname = element(by.xpath('//input[@name="cardholderName"]'));
    var exprmonth = element(by.css('select[name="expiryDate.expiryMonth"] option[value="05"]'));
    var expryear = element(by.css('select[name="expiryDate.expiryYear"] option[value="2019"]'));
    var scrcode = element(by.name('securityCode'));
    var finalpay = element(by.css('fieldset[class*="bottom clearfix"] input[class*="btn-make-payment"]'));
    var payconfpage = element(by.css('div.payments-page__section'));
    var SavedCardPath = element(by.css('.payments-page__saved-cards-table__row'))
    var PaynewCardLink = element(by.css('button.btn-tertiary'))
    var PaymentHeader = element(by.css('.step-amount>h5'))
    var PaymentAmountText = "Payment amount"
    var CurrentBalnceSection = element(by.css('.step-amount .py-3'))
    var PaymentInfoMessage = element(by.css('.payments-page__info>p'))
    var PaymentIntoText = "You can make a payment securely online using your credit or debit card."
    var QuestinarySection = element(by.css('.form-control-label'))
    var QuestinarySectionText = "How much would you like to pay?"
    var Payment_WorldPayFrame = element(by.css("#wp-cl-custom-html-iframe"));
    var Payment_WorldPayHeader = element(by.css('#main>div:nth-child(1)'));
    var Payment_WorldPayTitle = element(by.css('.box-title'));
    var Payment_WorldPaySubTitle = element(by.css('.note'));
    var Payment_WorldPayCnumber = element(by.css("#cardNumber"));
    var Payment_WorldPayCName = element(by.css("#cardholderName"));
    var Payment_WorldPayScode = element(by.css("#securityCode"));
    var Payment_WorldPayEmonth = element(by.css('[name="expiryDate.expiryMonth"] option[value="05"]'));
    var Payment_WorldPayEyear = element(by.css('select[name="expiryDate.expiryYear"] option[value="2022"]'));
    var Payment_WorldPaySubmit = element(by.css("input[id='submitButton']"));
    var ConfirmationText = element(by.css('.//h5[contains(text(),"Confirmation")]'))
    var EmailandPayemntContent = element(by.css('.p-3>p:nth-child(4)'))
    var ConfirmationPageSectionContent2 = element(by.css('.p-3 p:nth-child(5)'))
    var ConfirmationPageSectionContent2Text = "Your payment may take up to 24 hours to show in your online account."
    var ConfirmationPageSectionContent3 = element(by.css('.p-3>p:nth-child(6)'))
    var ConfirmationPageSectionContent4 = element(by.css('.mt-5>p'))
    var ConfirmationPageSectionContent4Text = "Your card details have been saved so it's easier for you to make future payments."
    var ConfirmationPageSectionContent5 = element(by.css('.mt-5>div>p'))
    var ConfirmationPageSectionContent5Text = "You can remove, edit and add cards anytime within your online account."
    var ConfirmationmanageCardsButton = element(by.css('.mt-5>div>button '))
    var ManageCardsHeaderSection = element(by.css('.payments-page__info'))
    var ManageCardSection = element(by.css('.payments-page__section h5'))
    var ManageCardSectionText = "Your payment cards"
    var ManageCardLineItem = element(by.css('.p-0 li:nth-child(2)'))
    var EditButton = element(by.xpath('(.//*[@class="p-0"]/li[2]//button)[1]'))
    var DeleteButton = element(by.xpath('(.//*[@class="p-0"]/li[2]//button)[2]'))
    var AddcardButton = element(by.css('.my-4 button'))
    var ManageCardHeaderText = "You can add a maximum of 16 payment cards";
    var WorldpayAddCardbutton = element(by.css('#submitButton'))
    var ConfirmationAddedCardMessagePath = element(by.css('.py-1'))
    var ConfirmationAddedCardMessageText = "Your payment card has been successfully validated. It may take upto 24 hours to show in your online account."
    var ManageCardTableCount = element.all(by.css('.payments-page__saved-cards-table ul li'))
    var EmailID = ""; var PaidAmount = ""; var count = "";
    var log4js = require('log4js');
    var logger = log4js.getLogger();

    this.verifyManageCardSection = function()
    {
          until.waitUntilVisibility(ManageCardsHeaderSection);
          bot.CompareText(ManageCardsHeaderSection,ManageCardHeaderText);
          bot.CompareText(ManageCardSection,ManageCardSectionText);
          bot.isDisplayed(ManageCardLineItem).then(function()
          {
               bot.isDisplayed(EditButton);
               bot.isDisplayed(DeleteButton);
               bot.isDisplayed(AddcardButton);
          });
    };

    this.load = function (url) {
        bot.launchUrl(url);
    };

    this.GettingCardDetails = function()
    {
      count = 21;
      var that = this;

     ManageCardTableCount.count().then(function(arg)
      {
        var x =arg;
        logger.info("Table Lenght is:"+x);
        //for(var i=x-1;i<15;i++)
      //  {
          that.ClickAddCard();
          that.VerifyWorldPayPage();
          that.EnterCardDetails(count);
          that.VerifyConfirmationAddCard();
          logger.info("!!!!!!!!count is:"+count);
          count++;
      //  }
      });
    };

    this.ClickAddCard = function()
    {
        until.waitUntilElementToBeClickable(AddcardButton);
        bot.clickAction(AddcardButton);
    };

    //Function to pass the login mail address for ASMR bill journey from excel
    this.loginPayment = function(row){
      var file = '../LoggedInPayment.xlsx';
      var column = ["B","C"];
      var sheet = 'Sheet1';
      var array = [];
      fueltype = bot.excelread(file,"Sheet1",row,"D");
      EmailID = bot.excelread(file,"Sheet1",row,"B");
      for(var i=0;i<column.length;i++)
      {
        var array1 = bot.excelread(file,sheet,row,column[i]);
        array.push(array1);
      }
      LoginPage.login(array[0],array[1]);
    };

    //Function to pass the input value for view bill based on Account Type
    this.PerformLoginPayment = function(arg) {
      var that = this;
      try{
        logger.info("I am in For login Switch case")
        accountType = arg;
        switch(arg) {
          case "Single-Account":that.loginPayment(2);break;
          default:
          logger.info("**** Data given for Perform Login is not valid");
        }
      }
      catch(e)
      {
        logger.info("Helo i am here :"+e.stack)
      }
    };

    this.VerifySavedCardSection = function()
    {
      try{
          SavedCardPath.isPresent().then(function(arg)
          {
          var x = arg;
          if(x === true)
          {
            bot.clickAction(PaynewCardLink);
          }
          else if(x === false)
          {
            logger.info("Saved Card Details not found")
          }
        });
      }
      catch(e)
      {
        logger.info("Exception in Verify Ssaved card Fucntion"+e.stack);
      }
    };

    this.verifyPaymentSection = function()
    {
  try {
      until.waitUntilElementToBeClickable(amountToPay);
      bot.CompareText(PaymentInfoMessage,PaymentIntoText);
      bot.CompareText(PaymentHeader,PaymentAmountText);
      bot.isDisplayed(CurrentBalnceSection);
      bot.CompareText(QuestinarySection,QuestinarySectionText);
      bot.isDisplayed(amountToPay);
      bot.isDisplayed(paysmtbtn);
    }
    catch(e)
    {
        logger.info("Exception in payment section Fucntion"+e.stack);
    }
    };

    this.VerifyWorldPayPage = function(){
      try{
        browser.sleep(10000);
        Payment_WorldPayFrame.isPresent().then(function(arg)
        {
          var x =arg;
          logger.info("x value is :"+x);
          if(arg === true)
          {
                browser.ignoreSynchronization=true;
                browser.switchTo().frame('wp-cl-custom-html-iframe').then(function(){
                logger.info("I am in For checking World pay Screen")
                var fields2 = [Payment_WorldPayTitle,Payment_WorldPaySubTitle,Payment_WorldPayCnumber,Payment_WorldPayCName,
                                Payment_WorldPayScode,Payment_WorldPayEmonth,Payment_WorldPayEyear];
                  for(var i =0; i<fields2.length;i++){
                      bot.isDisplayed(fields2[i]);
              }
            });
        }
          else if(arg === false) {
              logger.info("WorldPaye Screen Not Displayed")
          }
    });
  }
          catch(e)
          {
            logger.info("Exception In World Pay Screen"+e.stack)
          }
  };

    this.movetopay = function(Paymentamount) {
        until.waitUntilElementToBeClickable(paymentlnk);
        bot.clickAction(paymentlnk);
    };

    this.MoveToManageCards = function()
    {
      until.waitUntilElementToBeClickable(managecardsLink);
      bot.clickAction(managecardsLink);
    }

    this.EnterPaymentAmount = function(Paymentamount)
    {
      try{
        PaidAmount = Paymentamount;
      bot.clearText(amountToPay);
      bot.enterText(amountToPay,Paymentamount);
    }
    catch(e)
    {
      logger.info("Exception in mover to pay"+e.stack)
    }
    };

    this.PaymentContinueButton = function()
    {
      try {
        bot.clickAction(paysmtbtn);
      } catch (e) {
          logger.info("Exception in payment Countine"+e.stack)
      }

    }

    this.EnterCardDetails = function(arg){
      try{

          console.log("Entering the sheet"+count);
          var sheet = "Sheet1" ;
          var row = arg;
          var fields = [Payment_WorldPayCnumber,Payment_WorldPayCName,Payment_WorldPayEmonth,Payment_WorldPayEyear,Payment_WorldPayScode];
          var file = '../LoggedInPayment.xlsx';
          var column = ["B","C","D","E","F"];
          var array = [];
          var month = bot.excelread(file,sheet,row,"D");
          var Year = bot.excelread(file,sheet,row,"E");
          for(var i =0;i<column.length;i++){
            var array1 = bot.excelread(file,sheet,row,column[i]);
            array.push(array1);
          }
      bot.enterText(Payment_WorldPayCnumber,array[0]);
      bot.enterText(Payment_WorldPayCName,array[1]);
      bot.clickAction(element(by.css('select[name="expiryDate.expiryMonth"] option[value="'+month+'"]')));
      bot.clickAction(element(by.css('select[name="expiryDate.expiryYear"] option[value="'+Year+'"]')));
      browser.sleep(3000);
      bot.enterText(Payment_WorldPayScode,array[4]);
      browser.sleep(3000);
      bot.isDisplayed(element(by.css("small[id='pin-helptxt']")));
      bot.clickAction(Payment_WorldPaySubmit);
    //  this.VerifyConfirmationAddCard();
    }
    catch(e)
    {
      logger.info("Exception in Enter Card Details"+e.stack)
    }
    };

    this.WorldpayAddCardButton = function()
    {
      logger.info("i am in side for clicking Add Card button")
       until.waitUntilElementToBeClickable(WorldpayAddCardbutton);
       bot.clickAction(WorldpayAddCardbutton);
    };

    this.VerifyConfirmationAddCard = function()
    {
        browser.sleep(5000);
        console.log("I am in for confirmation page");
        until.waitUntilVisibility(ConfirmationAddedCardMessagePath);
        bot.CompareText(ConfirmationAddedCardMessagePath,ConfirmationAddedCardMessageText);
    };

    this.ConfirmationPageValidation = function () {
        browser.sleep(5000);
        try{
        var status;
        if(bot.isDisplayed(payconfpage).then(function(result)
        {
          var x = result;
          logger.info("X value is :"+x)
          if(x === true)
          {
            logger.info("Confirmation Page is Displayed")
            var EmailandPaymentText = "We've received your payment for £"+PaidAmount+".00 and sent an email confirmation to "+EmailID+"."
            bot.CompareText(EmailandPayemntContent,EmailandPaymentText);
            bot.CompareText(ConfirmationPageSectionContent2,ConfirmationPageSectionContent2Text);
            bot.isDisplayed(ConfirmationPageSectionContent3);
            bot.CompareText(ConfirmationPageSectionContent4,ConfirmationPageSectionContent4Text);
            bot.CompareText(ConfirmationPageSectionContent5,ConfirmationPageSectionContent5Text);
            bot.isDisplayed(ConfirmationmanageCardsButton);
          }
          else if(x === false)
          {
            logger.info("Confirmation page is not displayed")
          }
      }));
    }
    catch(e)
    {
      logger.info("Exception in Confirmation Page:"+e.stack)
    }
  };



};module.exports = new PaymentPage();
