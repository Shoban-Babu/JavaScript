var SMRPage = function () {

  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var bot = require('../../helper/BrowserBot.js');
  var until = require('../../helper/Until.js');
  var excel = require('../../helper/excelread.js');
  var LoginPage = require('../../jasmine_POM/pages/LoginPage.js')
  var expect = require('expect');
  var Loginlink = element(by.css('div.ukb-head-topnav  a[href*="login"]'));
  var email = element(by.name('email'));
  var password = element(by.name('password'));
  var Loginbtn = element(by.css('button.btn-submit'));
  var BGSubmitMeterReadLink = element(by.css('a[href*="meter-readings"]'));
  var BGSubmitMeterReadLink3 = element(by.xpath('(//*[@class="ember-view"]/ul/li[1]/a)[1]'));
  var BGDatePicker = element(by.css('div.date-picker'));
  var BGpreviousdatePicker = element(by.css('a[href*="meter-readings"]'));
  var BGDateselector = element(by.xpath('//*[@class="pika-lendar"]/table/tbody/tr[4]/td[3]'));
  var BGDailsInput = element(by.xpath('.//*[@class="meter-details"]/div[3]/div[2]/div[2]/div[2]//*[@class="meter-register"]//input[@data-test-dial="0"]'));
  var BGSubmitButton = element(by.css('button[class*="submit-button"]'));
  var BGCancelbutton = element(by.css('button[class*="cancel-button"]'));
  var BGconfirmationtext = element(by.xpath('.//h5[@class="m-0"]'));
  var acctlink = element(by.xpath('.//*[@class="your-account__side-navbar"]/div/div/div/div/div/ul/li[1]/a'));
  var pickmonth = element(by.css('select[class*="pika-select-month"]  option')) ;
  var pickday = element(by.css('tr[class="pika-row"] td[data-day="10"]')) ;
  var todaydate=element(by.xpath('//*[@class="pika-row"]/td[@class="is-today is-selected"]'));
  var subbtn = element(by.css('button[class*="submit-button"]'));
  var confirmationTitle = element(by.css('.confirmation-details strong'));
  var ActualDate = element(by.xpath('.//*[text()="Actual"]/strong'))
  var DatePicker = element(by.xpath('//*[@class="form-control ember-view"]'))
  var YearSelectionSection = element(by.xpath('//select[@class="pika-select pika-select-year"]'))
  var MonthSelectionSection = element(by.xpath('//select[@class="pika-select pika-select-month"]'))
  var StatusOfAccount = element(by.css('#h1'))
  var SubmitmeterReadTexxt = element(by.xpath('(//*[@class="ember-view"]/ul/li[2]/a)[1][text()="Submit a meter reading"]'))
  var DashBoardSection = element(by.css('.your-account__dashboard'))
  var MoreThanThreeMetersError = element(by.css('.ukb-registration--error-text>p'))
  var ComplexMeterErrorMessage = element(by.xpath('(//*[@class="col your-account__dashboard"]//ul[1])[1]/li[1]/div'))
  var searchItemPath = element(by.name('searchItem'))
  var SearchForm = element(by.css('.search-form'))
  var searchByPath = element(by.css('.ember-power-select-placeholder'))
  var SearchButton = element(by.css('.search-form button'))
  var ImplusibleOverlay = element(by.css(".implausible-modal"))
  var ImplusibleSubmitButton = element(by.css(".implausible-modal div>button:nth-child(1)"))
  var MeterDetailsSection = element(by.css('.meter-details--content-bg-color>div:first-child'))
  var ConfirmationPageEstimateMessage = element(by.css('.confirmation-table>div>div:last-child'))
  var ConfirmationEstimatedText = "*If the meter read is significantly different to what we were expecting your next bill may be estimated."
  var NewBalanceTitleMessage = element(by.css('.confirmation-details>p>strong'))
  var ODBSection = element(by.css('.confirmation-details>div:last-child'))
  var ODBBillAmount = element(by.xpath('.//*[@class="confirmation-details__amount"]'))
  var BalanceAmount = element(by.css('.accent-orange'))
  var PaymentButton =element(by.css('.confirmation-details>div:last-child button'))
  var NewBalanceSectionText = "Your new balance based on readings you submitted is displayed belows"
  var LogOutCQ = element(by.xpath('.//*[@title="Log out"]'))
  var MultipleAccountselection = element(by.css('.accounts-list__wrapper'))
  var MultipleAccountselectionbyrow = element(by.css('.accounts-list__wrapper>div:nth-child(3)'))
  var BalanceAmountType = element(by.css('.your-account__balance-plan>div>div>div>p:last-child'))
  var PaymentTypeCheck = element(by.xpath('.//*[text()="Setup a Direct Debit"]'))
  var AddresSection = element(by.css('.address'))
  var meterserialnumberSection = element(by.css('.mb-1:last-child span'))
  var YourNewMeterReadSction = element(by.xpath('(.//*[@class="meter-details"]//h5)[2]'))

  var no_of_readings = "";var no_of_rows = "";var no_of_cells = "";var no_of_cells_per_row = "";var no_of_cells_per_row1 = ""; var reading = "";
  var reading1 = "";var weekcount="";var daycount="";var fueltype=""; var accountType ="";
  var num = "";var X1,R=6,c;
  var MeterReadValues = []; var ConfirmationArray = [];

  /*Function to navigate Login page*/
  this.navigate = function () {
    bot.clickAction(Loginlink);
  };

  //Function to pass the login mail address for ASMR bill journey from excel
  this.loginLSMR = function(row){
    var file = '../LSMR_Inputs.xlsx';
    var column = ["B","C"];
    var sheet = 'Sheet1';
    var array = [];
    fueltype = bot.excelread(file,"Sheet1",row,"D");
    for(var i=0;i<column.length;i++)
    {
      var array1 = bot.excelread(file,sheet,row,column[i]);
      array.push(array1);
    }
    LoginPage.login(array[0],array[1]);
  };

  //Function to pass the input value for view bill based on Account Type
  this.PerformLoginLSMR = function(arg) {
    var that = this;
    try{
      logger.info("I am in For login Switch case")
      accountType = arg;
      switch(arg) {

        case "In-Progress-Account":that.loginLSMR(2);break;
        case "Closed-Account":that.loginLSMR(3);break;
        case "More_Than_Three_Meters":that.loginLSMR(4);break;
        case "Complex_Meter":that.loginLSMR(5);break;
        case "More_Than_Three_Meters_Collective":that.loginLSMR(6);break;
        case "Single_Account_Gas":that.loginLSMR(7);break;
        case "Single_Account_Electricity":that.loginLSMR(8);break;
        case "Single_Account_Multi_Meter":that.loginLSMR(9);break;
        case "Single_Account_Gas_Collective_MPAN":that.loginLSMR(10);break;
        case "Single_Account_Gas_Collective_Postcode":that.loginLSMR(11);break;
        case "Single_Account_Electricity_Collective_MPAN":that.loginLSMR(12);break;
        case "Single_Account_Electricity_Collective_PostCode":that.loginLSMR(13);break;
        case "Single_Account_Gas_ODB":that.loginLSMR(14);break;
        case "Single_Account_Electricity_MultiMeter_ODB":that.loginLSMR(15);break;
        case "Multiple_Electricity_Multi_register":that.loginLSMR(16);break;
        case "Multiple_Gas_Single_register":that.loginLSMR(17);break;
        case "Multiple_Electricity_Multi_Meter":that.loginLSMR(18);break;

        default:
        logger.info("**** Data given for Perform Login is not valid");
      }
    }
    catch(e)
    {
      logger.info("Helo i am here :"+e.stack)
    }
  };

  /*Fucntion to Navigate the Submit Meter Read Page*/
  this.Accountoverview = function () {
    reading ="";
    reading1 ="";
    num = 1;
    this.PoPingArray();
    until.waitUntilElementToBeClickable(BGSubmitMeterReadLink);
    bot.clickAction (acctlink);
    var PaymentTypee = BalanceAmountType.getAttribute('value');
    logger.info("=======Payment Typr Is"+PaymentTypee);
    bot.clickAction(BGSubmitMeterReadLink);
  };

  /*Fuction to be select account number from multiple Account DasBoard*/
  this.SelctAccountFromDashBoard = function()
  {
    until.waitUntilElementToBeClickable(MultipleAccountselection);
    bot.clickAction(MultipleAccountselectionbyrow);
  }

  /*Function to Validate the Meter Deatils Page*/
  this.VerifyMeterDeatilsPage = function()
  {
    until.waitUntilVisibility(MeterDetailsSection);
    bot.isDisplayed(AddresSection);
    bot.isDisplayed(meterserialnumberSection);
    bot.isDisplayed(YourNewMeterReadSction);
  };

  /* Function o Deleting the meter read array values using POP*/
  this.PoPingArray = function()
  {
    var arrylen = MeterReadValues.length;
    logger.info("Meter read values Length:"+arrylen);
    for(var i = arrylen;i>=0;i--)
    {
      MeterReadValues.pop();
    }
    logger.info("Meter read values Length After pop:"+arrylen);
  };

  /*Function to validate the negative error messages for LSMR*/
  this.VerifyLSMRErrorMessage = function(errormessage,accountType)
  {
    var that =this;
    var arg = accountType;
    switch(arg)
    {
      case "Closed-Account":that.VerifySubmitMeterReadTextVisible();break;
      case "More_Than_Three_Meters":that.VerifyMoreThreeThanMeter(errormessage);break;
      case "Complex_Meter":that.VerifyComplexMeterErrorMessage(errormessage);break;
      case "More_Than_Three_Meters_Collective":that.VerifyMoreThreeThanMeter(errormessage);break;
    }
  };

  /*Function to validate and fetch the meter details from Meter Deatils Page for Multi Meter*/
  this.retrieveAndFillAccountDetails = function ()
  {
    var that=this;
    var sym=",";
    element.all(by.xpath('//*[@class="col-12 p-2 mb-0 mb-sm-3"]')).then(function(items){
      no_of_readings=items.length;
      logger.info("no_of_readings: "+no_of_readings);
    });

    element.all(by.xpath('//*[@class="col-12 pl-2 ml-1"]/div/div')).then(function(items){
      no_of_rows=items.length;
      logger.info("no_of_rows "+no_of_rows);
    });

    element.all(by.xpath('//*[@class="col-12 pl-2 ml-1"]/div/div/div/div')).then(function(items){
      no_of_cells=items.length;
      logger.info("No of Cells in SMR: "+no_of_cells);
      no_of_cells_per_row = (no_of_cells/no_of_rows);
      no_of_cells_per_row1=no_of_cells_per_row;
      logger.info("no_of_cells_per_row: "+no_of_cells_per_row);

      browser.controlFlow().execute(function () {
        for (var j=1;j<= no_of_cells;j++)
        {
          if(j<=no_of_cells_per_row)
          {
            element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div)['+j+']/div/input')).getAttribute('value').then(function(val){
              reading=reading.concat(val);
              reading1=reading;
            });
          }
          if(j==no_of_cells_per_row)
          {
            j=j+no_of_cells_per_row1;
            no_of_cells_per_row=no_of_cells_per_row+(no_of_cells_per_row1*2);
            logger.info("mathematical: "+no_of_cells_per_row);
          }
        }
      });
    }).then(function(){
      that.fetchReadingValue();
    });
    return reading1;
  };

  /*Function to enter the updated meter deatils for Multi Meter*/
  this.fetchReadingValue = function ()
  {
    var startingString=0;
    var no_of_cells_per_row2=no_of_cells_per_row1;
    var z1=new Array(no_of_readings);
    var no_of_cells_per_row3=no_of_cells_per_row1;
    var no_of_cells_per_reading=(no_of_cells/no_of_readings);
    var condition=no_of_cells_per_reading;
    logger.info("Date Picker caluculation: "+condition);

    for(var z=1;z<=no_of_readings;z++){
      this.DateForMultiMeter(z);
      z1[(z-1)]=reading1.slice(startingString,no_of_cells_per_row2);
      startingString=startingString+no_of_cells_per_row1;
      no_of_cells_per_row2=no_of_cells_per_row2+no_of_cells_per_row1;

      var x=parseInt(z1[(z-1)]);
      var A1=(x+1).toString(10);
      while(A1.length<no_of_cells_per_row1){
        A1="0"+A1;
      }
      MeterReadValues.push(A1);
      X1=A1.split("");

      for(var a=0;a<X1.length;a++){
        for (var b=no_of_cells_per_row3+1;b<= no_of_cells;b++){
          b=no_of_cells_per_row3+1;

          if(b <= condition){
            element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div)['+b+']/div/input')).sendKeys(X1[a]);
            no_of_cells_per_row3=no_of_cells_per_row3+1;
            break;
          }
          if(b== condition+1){
            no_of_cells_per_row3=no_of_cells_per_row3+(no_of_cells_per_row1);
            condition=no_of_cells_per_reading*z;
          }
        }
      }
    }
  };

  /*Function to validate and fetch the meter details from Meter Deatils Page for Multi Register*/
  this.retrieveAndFillAccountDetailsmultiregister = function()
  {
    var that=this;
    var sym=",";
    element.all(by.xpath('//*[@class="col-12 p-2 mb-0 mb-sm-3"]/div[1]/div')).then(function(items){
      no_of_readings=items.length;
      logger.info("No of Meter Readings: "+no_of_readings);
    });

    element.all(by.xpath('//*[@class="col-12 pl-2 ml-1"]/div/div')).then(function(items){
      no_of_rows=items.length;
      logger.info("No of Rows in SMR: "+no_of_rows);
    });

    element.all(by.xpath('//*[@class="col-12 pl-2 ml-1"]/div/div/div/div')).then(function(items){
      no_of_cells=items.length;
      logger.info("No of Cells in SMR: "+no_of_cells);
      no_of_cells_per_row = (no_of_cells/no_of_rows);
      no_of_cells_per_row1=no_of_cells_per_row;
      logger.info("No of Celles Per Row: "+no_of_cells_per_row);

      browser.controlFlow().execute(function ()
      {
        for (var j=1;j<=no_of_cells;j++)
        {
          if(j<=no_of_cells_per_row)
          {
            element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div)['+j+']/div/input')).getAttribute('value').then(function(val){
              reading=reading.concat(val);
              reading1=reading;
            });
          }
          if(j==no_of_cells_per_row)
          {
            logger.info("Jvalue: "+j);
            no_of_cells_per_row=no_of_cells_per_row+(no_of_cells_per_row1*2);
            logger.info("mathematical: "+no_of_cells_per_row);
          }
        }
      });
    }).then(function(){
      that.fetchReadingValueMultiRegister();
    });
    return reading1;
  };

  /*Function to enter the updated meter deatils for Multi Register*/
  this.fetchReadingValueMultiRegister = function ()
  {
    var startingString=0;
    var no_of_cells_per_row2=no_of_cells_per_row1;
    var z1=new Array(no_of_readings);
    var no_of_cells_per_row3=no_of_cells_per_row1;
    var no_of_cells_per_reading=(no_of_cells/no_of_readings);

    var condition=no_of_cells_per_reading;
    logger.info("No of cells per reading: "+no_of_cells_per_reading);
    logger.info("No of readings:"+no_of_readings)
    c = no_of_cells_per_row3 * no_of_readings + 1;

    for(var z=1;z<=no_of_readings;z++)
    {
      z1[(z-1)]=reading1.slice(startingString,no_of_cells_per_row2);
      startingString=startingString+no_of_cells_per_row1;
      no_of_cells_per_row2=no_of_cells_per_row2+no_of_cells_per_row1;
      logger.info("z1[(z-1)]:"+z1[(z-1)]);
      var x=parseInt(z1[(z-1)]);
      var A1=(x+1).toString(10);
      while(A1.length<no_of_cells_per_row1){
        A1="0"+A1;
      }
      MeterReadValues.push(A1);
      logger.info("Meter read After adding:"+A1);
      element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div)['+c+']/div/input')).sendKeys(A1);
      c = c + no_of_cells_per_row1;
    }
  };

  /*Function to be select the Date picker for Multi Registers*/
  this.DatePickerSelection = function()
  {
    try
    {
      browser.executeScript('window.scrollTo(0,10000);').then(function () {
        bot.isDisplayed(ActualDate);
      });
      ActualDate.getText().then(function(text) {
      date = text;
      logger.info("Actual date is:==========="+date)
      var vb = new Date(date);
      var vb1 = vb.getDate() + 1;
      vb.setDate(vb1)
      var newDate = vb.toString();
      console.log("Incremental Reading is:(((((((((((((((())))))))))))))))"+newDate);
      var splitdate = newDate.split(" ");
      var day=splitdate[2];
      if(day.slice(0,1) == "0")
        {
            day = day.replace(0,"");
            logger.info("Previous Meter After Removing Zeros:@@@@" +day);
        }
      var month=splitdate[1];
      var year=splitdate[3];
      bot.clickAction(DatePicker);
      bot.clickAction(YearSelectionSection);
      element(by.xpath('//select[@class="pika-select pika-select-year"]//option[text()="'+year+'"]')).click();
      browser.sleep(200);
      bot.clickAction(MonthSelectionSection);
      element(by.xpath('//select[@class="pika-select pika-select-month"]//option[contains(text(),"'+month+'")]')).click();
      element(by.xpath('//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"]')).click();
      });
  }catch(e)
  {
    logger.info("Message is @#@#@@:"+e.stack);
  }

  }

  /*Function to be select the Date picker for Multi Meter*/
  this.DateForMultiMeter = function(arg)
  {
    try
    {
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
        element(by.xpath('(//*[@class="date-picker col-12 col-lg-10 p-0"])['+arg+']/div/input')).isDisplayed();
        });
        logger.info("_____________NUM value Zis:"+num)
        var DateElement = element(by.xpath('(//p[@class="mt-3"])['+num+']/strong'));
        DateElement.getText().then(function(text){
        date = text;
        console.log("Actual Date  is:"+date);
        var vb = new Date(date);
        var vb1 = vb.getDate() + 1;
        vb.setDate(vb1)
        var newDate = vb.toString();
        console.log("Incremental Reading is:(((((((((((((((())))))))))))))))"+newDate);
        var splitdate = newDate.split(" ");
        var day=splitdate[2];
        if(day.slice(0,1) == "0")
          {
              day = day.replace(0,"");
              logger.info("Previous Meter After Removing Zeros:@@@@" +day);
          }
        var month=splitdate[1];
        var year=splitdate[3];
        bot.clickAction(element(by.xpath('(//*[@class="form-control ember-view"])['+arg+']')));
        bot.clickAction(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+arg+']')));
        bot.clickAction(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+arg+']//option[text()='+year+']')));
        browser.sleep(500);
        bot.clickAction(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+arg+']')));
        element(by.xpath('(//select[@class="pika-select pika-select-month"])['+arg+']//option[contains(text(),"'+month+'")]')).click();
        element(by.xpath('(//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"])['+arg+']')).click();
      });
      num = num + 1;
    }catch(e)
    {
      logger.info("Message is @#@#@@:"+e.stack);
    }
  };

  /*Function to click Submit Meter Read Button with Implusible Overlay*/
  this.submitmeter = function ()
  {
    bot.clickAction (subbtn);
    ImplusibleOverlay.isPresent().then(function(arg){
      var x = arg;
      logger.info("X value Is: "+x);
      if(x == true)
      {
        until.waitUntilVisibility(ImplusibleSubmitButton);
        bot.clickAction(ImplusibleSubmitButton);
      }
      else if(x == false)
      {
        logger.info("Not an Implusible Journey:");
      }
    });
  };

  /*Function to be validate the confirmation page using IF-Else*/
  this.verifyConfirmationPage = function ()
  {
    try
    {
      until.waitUntilVisibility(confirmationTitle);
      bot.getElementText(confirmationTitle,"Your meter reading is complete.");
      bot.CompareText(ConfirmationPageEstimateMessage,ConfirmationEstimatedText)
      if(accountType == "Single_Account_Gas_Collective_Postcode" || accountType == "Single_Account_Gas_Collective_MPAN"
      || accountType == "Single_Account_Electricity_Collective_PostCode" || accountType == "Single_Account_Electricity_Collective_MPAN")
      {
        logger.info("###############I am in Multi Meter for Collective")
        var Str1 = '(.//*[@class="confirmation-table row mt-3"]//tbody/tr[';
        var Str2 = ']/td[4]//span[@class="text-right"])[1]';
        this.ConfirmationMeterReadDetailsVerification(Str1,Str2);
      }
      else if (accountType == "Single_Account_Multi_Meter" || accountType == "Single_Account_Electricity_MultiMeter_ODB" || accountType == "Multiple_Electricity_Multi_Meter")
      {
        logger.info("###############I am in Multi Meter")
        var Str1 = '(.//*[@class="confirmation-table row mt-3"]//tbody/tr[';
        var Str2 = ']/td[5]//span[@class="text-right"])[1]';
        this.ConfirmationMeterReadDetailsVerification(Str1,Str2);
      }
      else
      {
        logger.info("###############I am in Normal Meter")
        var Str1 = '(.//*[@class="confirmation-table row mt-3"]//tbody/tr[1]/td[5]//span[@class="text-right"])[';
        var Str2 = ']';
        this.ConfirmationMeterReadDetailsVerification(Str1,Str2);
      }
    }
    catch(e)
    {
      logger.info("EEEExceptions are:**:"+e.stack)
    }
  };

  /*Function to validate the confirmation page with ODB confirmation page */
  this.verifyODBConfirmationPage = function()
  {
    until.waitUntilVisibility(NewBalanceTitleMessage);
    bot.CompareText(NewBalanceTitleMessage,NewBalanceSectionText);
    bot.isDisplayed(ODBSection);
    bot.isDisplayed(ODBBillAmount);
    bot.isDisplayed(BalanceAmount);
    this.VerifyPaybalnceButton();
  };

  /*Function to validate confirmation Meter Read Details*/
  this.ConfirmationMeterReadDetailsVerification = function(Str1,Str2)
  {
    try
    {
      if(fueltype === "Gas")
      {
        for(var i=1;i<=no_of_readings;i++)
        {
          for(var s=0;s<MeterReadValues[i-1].length;s++)
          {
            logger.info("i am in for if condition")
            if(MeterReadValues[i-1].slice(0,1) == "0")
            {
              MeterReadValues[i-1] = MeterReadValues[i-1].replace(0,"");
              logger.info("Previous Meter After Removing Zeros:@@@@" +MeterReadValues[i]);
            }
          }
          var combinePath = Str1 + i + Str2;
          var temp = element(by.xpath(combinePath));
          logger.info("Meter read value after slice:******" +MeterReadValues[i-1]);
          bot.CompareText(temp,MeterReadValues[i-1]);
        }
      }
      else if(fueltype === "Electricity")
      {
        for(var i=1;i<=no_of_readings;i++)
        {
          var len = MeterReadValues[i-1].length;
          logger.info("meter read Length is:"+len)
          for(var s=0;s<len;s++)
          {
            if(MeterReadValues[i-1].slice(0,1) == "0")
            {
              MeterReadValues[i-1] = MeterReadValues[i-1].replace(0,"");
              logger.info("Previous Meter After Removing Zeros:@@@@@@" +MeterReadValues[i]);
            }
          }
          var combinePath = Str1 + i + Str2;
          var temp = element(by.xpath(combinePath));
          logger.info("Meter read value after slice for Electricity:******" +MeterReadValues[i-1]);
          bot.CompareText(temp,MeterReadValues[i-1]);
        }
      }
    }
    catch(e)
    {
      logger.info("Exceptions are:**:"+e.stack)
    }
  };

  /*Function to validate payement balance button in ODB confirmation*/
  this.VerifyPaybalnceButton = function()
  {
    PaymentButton.isPresent().then(function(arg)
    {
      var x = arg;
      if(x == true)
      {
        logger.info("Payment Eligible")
      }
      else if(x == false)
      {
        logger.info("Payment Not Eligible")
      }
    });
  };

  /*Function to validate Status of account*/
  this.VerifyStausOfAccountPage = function(message)
  {
    until.waitUntilVisibility(StatusOfAccount);
    bot.CompareText(StatusOfAccount,message);
    bot.clickAction(LogOutCQ);
  };

  /*Function to validate Closed_Account*/
  this.VerifySubmitMeterReadTextVisible = function()
  {
    browser.sleep(3000);
    SubmitmeterReadTexxt.isPresent().then(function(arg)
    {
      var x = arg;
      logger.info("X value is:"+x)
      if(x === true)
      {
        logger.info("Submit Meter read Eligible Account(((())))");
      }
      else if(x === false)
      {
        logger.info("Submit Meter read Not Eligible Account(((())))");
      }
    });
  };

  /*Function to validate More than three meter error message*/
  this.VerifyMoreThreeThanMeter = function(message)
  {
    until.waitUntilVisibility(MoreThanThreeMetersError);
    bot.CompareText(MoreThanThreeMetersError,message);
  };

  /*Function to validate Status of account*/
  this.VerifyComplexMeterErrorMessage = function(message)
  {
    bot.CompareText(ComplexMeterErrorMessage,message)
  };

  /*Function to select the collective account details*/
  this.CollectiveSearchMeterDeatils = function(searchby,searchitem)
  {
    try
    {
      browser.sleep(1000);
      until.waitUntilVisibility(SearchForm);
      bot.clickAction(searchByPath);
      bot.clickAction(element(by.xpath('//li[text()="'+searchby+'"]')));
      bot.enterText(searchItemPath,searchitem);
      this.SearchButton();
    }
    catch(e)
    {
      logger.info("Collective account selection Error"+e.stack)
    }
  };

  /*Function to click collective search button*/
  this.SearchButton = function()
  {
    bot.clickAction(SearchButton);
  };

};module.exports = new SMRPage();
