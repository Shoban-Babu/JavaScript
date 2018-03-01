    var ASMR = function()
    {

    var bot = require('../../helper/BrowserBot.js');
    var util = require('../../helper/Until.js');
    var log4js = require('log4js');
    var logger = log4js.getLogger();

    var smrbutton = element(by.css("a[href*='submit-meter-read/your-details']"))
    var smrtitle = element(by.css(".meter-read h2"))
    var smrtitlevalue = "Submit a meter reading"
    var email = element(by.name("model.email"))
    var accno = element(by.name("model.accountNumber"))
    var sitepostcode = element(by.name("model.postcode"))
    //var NextButton = element(by.css(".submit-button"))
    var NextButton = element(by.css(".account-detail button"))
    var GlobalErrorMessage = element(by.css(".tertiary-text"))
    var emailerror = element(by.xpath(".//*[@name='model.email']/following::div[1]"))
    var accountnoerror = element(by.xpath(".//*[@name='model.accountNumber']/following::div[1]"))
    var postcodeerror = element(by.xpath(".//*[@name='model.postcode']/following::div[1]"))
    var emailerrormessage = "Enter a valid email address."
    var accountnoerrormessage = "Please enter your account number. This can be found on your bill and will start with 60."
    var postcodeerrormessage = "Enter a valid UK postcode"
    var fueltypePath = element(by.css(".meter-detail .justify-content-center strong"))
    var Accountnumber = element(by.xpath(".//*[@class='container meter-detail']/div/div/div[4]//span"))
    var meterserialnumber = element(by.xpath(".//*[@class='container meter-detail']/div/div/div[5]/p"))
    var ActualReadingDate = element(by.xpath(".//*[@class='container meter-detail']/div/div/p/strong"))
    var DatePicker = element(by.xpath('//*[@class="form-control ember-view"]'))
    var DatePickerPreviewButton = element(by.xpath('//body/div[6]//*[@class="pika-prev"]'))
    var YearSelectionSection = element(by.xpath('//select[@class="pika-select pika-select-year"]'))
    var MonthSelectionSection = element(by.xpath('//select[@class="pika-select pika-select-month"]'))
    var SubmitButton = element(by.css(".meter-detail>div>div>div>button:nth-child(1)"))
    var ImplusibleOverlay = element(by.css(".implausible-modal"))
    var ImplusibleSubmitButton = element(by.css(".implausible-modal div>button:nth-child(1)"))
    var ConfirmationPageTitle = element(by.css('.confirmation-detail strong'))
    var ConfirmationMessage = element(by.xpath(".//*[@class='confirmation-detail ukb-fe-vi-v1']/div[2]"))
    var Confirmationtext = "Thanks for giving us your meter reading. We'll email you to let you know it's been processed."
    var GetReminderCheck = element(by.css(".reminder-section>p"))
    var GetReminderText = "Get meter read reminders"
    var CheckBoxText = element(by.css(".check-box p"))
    var CheckBoxMessage = "Please tick if you want to receive a reminder email when your next meter read is due."
    var CheckBox = element(by.css(".check-box-check"))
    var TitleBox = element(by.css(".ember-power-select-trigger"))
    var TitleOption = element(by.xpath('.//ul[@class="ember-power-select-options ember-view"]/li[text()="Mr"]'))
    var Firstname = element(by.name("firstName"))
    var lastName = element(by.name("lastName"))
    var ReminderSubmitButton = element(by.css('.reminder-section button'))
    var RemiderSuccessfulmessage = element(by.xpath('.//*[@class="reminder-section"]/p[2]'))
    var GetReminderMessage = "You have been successfully registered for the email alerts. We'll notify you when your next meter read is due."
    var AlreadySubmitted = element(by.css(".pl-3"))

    var a ="";var row = "";var date = "";var accountno= "";var fueltype = "";var reading = "";var reading1 = "";var EmailID = "";var Nemail ="";
    var no_of_cells_per_row = "";var no_of_cells_per_row1 ="";var no_of_readings = "";var no_of_cells = "";var no_of_rows = "";
    var MeterReadValues = []; var ConfirmationArray = [];

    /* Navigate to SMR Home Page*/

    this.NavigateToSMRPage = function()
    {
    util.waitUntilVisibility(smrbutton);
    bot.clickAction(smrbutton);
    };

    /* Verify SMR Title*/
    this.VerifySMRTitle = function()
    {
    util.waitUntilVisibility(smrtitle);
    bot.CompareText(smrtitle,smrtitlevalue);
    reading ="";
    reading1 ="";
    this.PoPingArray();
    };

    /* To deleting the array values*/
    this.PoPingArray = function()
    {
    var arrylen = MeterReadValues.length;
    logger.info("Meter read values Length:"+arrylen);
    for(var i = arrylen;i>=0;i--)
    {
    MeterReadValues.pop();
    }
    logger.info("Meter read values Length After pop:"+arrylen);
    } ;

    /* Fetching Inputs from Excel*/
    this.FetchingInputs = function(arg)
    {
    var that = this;
    var a = arg;
    switch (a)
    {
    case "Invalid_Postcode":row = 2;that.ValuesEnterintoFields(row);break;

    case "Closed_Account":row = 3;that.ValuesEnterintoFields(row);break;

    case "Collective_Account":row = 4;that.ValuesEnterintoFields(row);break;

    case "Child_Account":row = 5;that.ValuesEnterintoFields(row);break;

    case "More_Than_Three_Meters":row = 6;that.ValuesEnterintoFields(row);break;

    case "Client_Side":row = 7;that.ValuesEnterintoFields(row);break;

    case "In-progress_Account":row = 8;that.ValuesEnterintoFields(row);break;

    case "Display_Accounts":row = 9;that.ValuesEnterintoFields(row);break;

    case "SubmitMeterRead_Gas":row = 10;that.ValuesEnterintoFields(row);break;

    case "SubmitMeterRead_Electricity":row = 11;that.ValuesEnterintoFields(row);break;

    case "SubmitMeterRead_MultiMeter":row = 12;that.ValuesEnterintoFields(row);break;

    case "SubmitMeterRead_Gas_implusible":row = 13;that.ValuesEnterintoFields(row);break;

    case "SubmitMeterRead_Electricity_MultiMeter_Implusible":row = 14;that.ValuesEnterintoFields(row);break;

    case "Reminder_Electricity":row = 15;that.ValuesEnterintoFields(row);break;

    case "Reminder_Gas_Multi_Meter":row = 16;that.ValuesEnterintoFields(row);break;

    case "Reminder_Already_Submitted":row = 17;that.ValuesEnterintoFields(row);break;

    case "Meter_Read_Submitted_On_The_Day":row = 18;that.ValuesEnterintoFields(row);break;
    }
    };

    /* Enter Inputs to Fields*/
    this.ValuesEnterintoFieldsintoFields = function(row)
    {
    if(a=="Reminder_Electricity" || a=="Reminder_Gas_Multi_Meter")
    {

    var column = ["C","D"];
    var array1 = [];
    var array2 = [accno,sitepostcode];
    fueltype = bot.excelread("../ASMR_Inputs.xlsx","Sheet1",row,"D");
    this.EmialSplitupFuction(EmailID,row);
    for(var i=0;i<column.length;i++){
      var val = bot.excelread("../ASMR_Inputs.xlsx","Sheet1",row,column[i]);
      array1.push(val);
    }
    bot.enterText(email,Nemail);
    for(var i=0;i<array2.length;i++){
      bot.enterText(array2[i],array1[i]);
      accountno = array1[1];
    }
    }
    else {
    var column = ["B","C","D"];
    var array1 = [];
    var array2 = [email,accno,sitepostcode];
    fueltype = bot.excelread("../ASMR_Inputs.xlsx","Sheet1",row,"E");
    for(var i=0;i<column.length;i++){
      var val = bot.excelread("../ASMR_Inputs.xlsx","Sheet1",row,column[i]);
      array1.push(val);
    }
    for(var i=0;i<array2.length;i++){
      bot.enterText(array2[i],array1[i]);
      accountno = array1[1];
    }
    }
    };

    /*Email ID split Up*/
    this.EmialSplitupFuction = function(EmailID,row)
    {
    EmailID = bot.excelread("../ASMR_Inputs.xlsx","Sheet1",row,"B");
    var temp = EmailID.split("@");
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 8; i++){
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    Nemail = temp[0]+ text + "@" + temp[1];
    return Nemail;
    }

    /*Error validation Using Switch Case*/
    this.ErrorValidation = function(errormessage,AccountType)
    {
    var that = this;
    var arg = AccountType;
    switch (arg)
    {
    case "Invalid_Postcode": bot.CompareText(GlobalErrorMessage,errormessage);break;
    case "Closed_Account": bot.CompareText(GlobalErrorMessage,errormessage);break;
    case "Collective_Account": bot.CompareText(GlobalErrorMessage,errormessage);break;
    case "Child_Account": bot.CompareText(GlobalErrorMessage,errormessage);break;
    case "More_Than_Three_Meters": bot.CompareText(GlobalErrorMessage,errormessage);break;
    case "In-progress_Account":bot.CompareText(GlobalErrorMessage,errormessage);break;
    }
    };

    /*Click Next button*/
    this.ClickNextButton = function()
    {
    bot.clickAction(NextButton);
    };

    /*Wait Time to load the error message*/
    this.WaitforErrorMessage = function()
    {
    util.waitUntilVisibility(GlobalErrorMessage);
    }

    /*Validate Client Side Error Messsage*/
    this.ClientSideError = function()
    {
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    bot.CompareText(emailerror,emailerrormessage);
    bot.CompareText(accountnoerror,accountnoerrormessage);
    bot.CompareText(postcodeerror,postcodeerrormessage);
    };

    /*Verification for SMR page like Account number, Fuel type Meterserialnumber*/
    this.verifySMRpage = function()
    {
    util.waitUntilVisibility(fueltypePath);
    bot.CompareText(fueltypePath,fueltype);
    bot.CompareText(Accountnumber,accountno);
    bot.isDisplayed(meterserialnumber);
    bot.isDisplayed(ActualReadingDate);
    }

    /*Getting Date from UI screen using get text*/
    this.gettingDate =function()
    {
    ActualReadingDate.getText().then(function(text) {
    date = text;
    console.log("Actual Reading is:"+date);
    return date;
    });
    };

    /*Date Picker selection for single meter with multiple registers account*/
    this.DatePickerSection = function()
    {
    try {
    browser.executeScript('window.scrollTo(0,10000);').then(function () {
      bot.isDisplayed(ActualReadingDate);
    });
    ActualReadingDate.getText().then(function(text) {
      date = text;
      console.log("Actual Reading is:"+date);
      var splitdate = date.split(" ");
      var day=splitdate[0];
      var month=splitdate[1];
      var year=splitdate[2];
      day = +day +1;
      bot.clickAction(DatePicker);
      //  bot.clickAction(DatePickerPreviewButton);
      bot.clickAction(YearSelectionSection);
      element(by.xpath('//select[@class="pika-select pika-select-year"]//option[text()="'+year+'"]')).click();
      browser.sleep(200);
      bot.clickAction(MonthSelectionSection);
      element(by.xpath('//select[@class="pika-select pika-select-month"]//option[text()="'+month+'"]')).click();
      element(by.xpath('//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"]')).click();
    });
    }catch(e)
    {
    logger.info("Message is @#@#@@:"+e.stack);
    }
    };

    /*Retrive Meter Details From Multiple registers*/
    this.retriveMeterDetails_MultipleReigiter = function()
    {
    var that=this;
    var sym=",";
    element.all(by.xpath('//*[@class="row m-0 mt-3"]')).then(function(items){
    no_of_readings=items.length;
    logger.info("No of Meter Readings: "+no_of_readings);
    });
    element.all(by.xpath('//*[@class="meter-register"]')).then(function(items){
    no_of_rows=items.length;
    logger.info("No of Rows in SMR: "+no_of_rows);
    });

    element.all(by.xpath('.//*[@class="p-1"]')).then(function(items){

    no_of_cells=items.length;
    logger.info("No of Cells in SMR: "+no_of_cells);
    no_of_cells_per_row = (no_of_cells/no_of_rows);
    no_of_cells_per_row1=no_of_cells_per_row;
    logger.info("No of Celles Per Row: "+no_of_cells_per_row1);

    browser.controlFlow().execute(
      function () {
        for (var j=1;j<=no_of_cells;j++)
        {
          if(j<=no_of_cells_per_row)
          {
            element(by.xpath("(.//*[@class='container meter-detail']/div/div/div//*[@class='p-1'])["+j+"]//input")).getAttribute('value').then(function(val){
              //logger.info("Path: (.//*[@class='container meter-detail']/div/div/div//*[@class='p-1'])["+j+"]//input");
              reading=reading.concat(val);
              reading1=reading;
              //logger.info("Meter Read value:" + reading1 + "J value is :" +j)
            });
          }
          if(j==no_of_cells_per_row)
          {
            logger.info("Jvalue: "+j);
            no_of_cells_per_row=no_of_cells_per_row+(no_of_cells_per_row1*2);
            logger.info("mathematical: "+no_of_cells_per_row);
          }
        }
        logger.info("Meter Reading is:"+reading1)
      });
    }).then(function(){
      that.SubmitMeterReading();
    });
    };

    /*Submitting Meter reading into input dials*/
    this.SubmitMeterReading = function()
    {
    try{
      var no_of_cells_per_row2 = no_of_cells_per_row1;
      var startingString=0;
      var Z = new Array(no_of_readings);
      var no_of_cells_per_row3 = no_of_cells_per_row1;
      var no_of_cells_per_reading = (no_of_cells/no_of_readings);
      c = no_of_readings + 9;

      for(var s=1;s<=no_of_readings;s++)
      {
        Z[s-1] = reading1.slice(startingString,no_of_cells_per_row2);
        startingString = startingString+no_of_cells_per_row1;
        no_of_cells_per_row2 = no_of_cells_per_row2+no_of_cells_per_row1;
        logger.info("Z[(s-1)]:"+Z[(s-1)]);
        var x =parseInt(Z[(s-1)]);
        var previousmeterread=(x+1).toString(10);
        while(previousmeterread.length<no_of_cells_per_row1){
          previousmeterread="0"+previousmeterread;
        }
        MeterReadValues.push(previousmeterread);
        logger.info("Meter read value after slice:******" +MeterReadValues[s-1]);
        element(by.xpath('.//*[@class="container meter-detail"]/div/div/div['+c+']//*[@data-test-dial="0"]')).sendKeys(previousmeterread);
        c++;
      }
    }
    catch(e)
    {
      logger.info("Infinte Exception is*****************: "+e.stack);
    }
    };

    /*Submit Button functionalities*/
    this.SubmitButton = function()
    {
    bot.clickAction(SubmitButton);
    ImplusibleOverlay.isPresent().then(function(arg){
      var x = arg;
      logger.info("X value Is: "+x);
      if(x == true)
      {
        util.waitUntilVisibility(ImplusibleSubmitButton);
        bot.clickAction(ImplusibleSubmitButton);
      }
      else if(x == false){
        {
          logger.info("Not an Implusible Journey:");
        }
      }
    });
    };

    /*Confirmation Page meter read Validation*/
    this.ConfirmationMeterReadVerification = function()
    {
    try{
      if(fueltype === "Gas")
      {
        for(var i=1;i<=no_of_readings;i++)
        {
          for(var s=0;s<MeterReadValues[i-1].length;s++)
          {
            if(MeterReadValues[i-1].slice(0,1) == "0")
            {
              MeterReadValues[i-1] = MeterReadValues[i-1].replace(0,"");
              logger.info("Previous Meter After Removing Zeros:@@@@" +MeterReadValues[i]);
            }
          }
          var temp = element(by.css('.table-bordered tbody tr:nth-child('+i+') td:nth-child(5)'));
          logger.info("Meter read value after slice:******" +MeterReadValues[i-1]);
          bot.CompareText(temp,MeterReadValues[i-1]);
        }
      }
      else if(fueltype === "Electricity")
      {
        //logger.info("Meter read value after slice for Electricity:******" +MeterReadValues[0]);
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
          var temp = element(by.css('.table-bordered tbody tr:nth-child('+i+') td:nth-child(5)'));
          logger.info("Meter read value after slice for Electricity:******" +MeterReadValues[i-1]);
          bot.CompareTextwithvalueAndSlice(temp,MeterReadValues[i-1]);
        }
      }
    }
    catch(e)
    {
      logger.info("Exceptions are:**:"+e.stack)
    }
    };

    /*Verification of confirmation page header and text*/
    this.VerifyConfirmationPage = function(message)
    {
    util.waitUntilVisibility(ConfirmationPageTitle);
    bot.CompareText(ConfirmationPageTitle,message);
    bot.CompareText(ConfirmationMessage,Confirmationtext);
    this.ConfirmationMeterReadVerification();
    };

    /*####################################################Multi Meter Scenario#########################################################*/

    /*Retriveing meter details for Multiple meters account*/
    this.retrieveAndFillAccountDetails_MultiMeter = function () {
    try{
      var that=this;
      var sym=",";
      element.all(by.xpath('.//*[@class="row m-0 mt-3"]')).then(function(items){
        no_of_readings=items.length;
        logger.info("no_of_readings: "+no_of_readings);
      });

      element.all(by.xpath('.//*[@class="col-sm-12 col-xs-12 pl-2 ml-1"]')).then(function(items){
        no_of_rows=items.length;
        logger.info("no_of_rows "+no_of_rows);
      });
      element.all(by.xpath('//*[@class="p-1"]')).then(function(items){

        no_of_cells=items.length;
        logger.info("No of Cells in SMR: "+no_of_cells);
        no_of_cells_per_row = (no_of_cells/no_of_rows);
        no_of_cells_per_row1=no_of_cells_per_row;
        logger.info("no_of_cells_per_row: "+no_of_cells_per_row);

        browser.controlFlow().execute(
          function () {
            for (var j=1;j<= no_of_cells;j++)
            {
              if(j<=no_of_cells_per_row)
              {
                element(by.xpath('(.//*[@class="container meter-detail"]/div/div/div//*[@class="p-1"])['+j+']//input')).getAttribute('value').then(function(val){
                  reading=reading.concat(val);
                  reading1=reading;
                  logger.info("Meter Read value:" + reading1 + "J value is :" +j)
                });
              }
              if(j==no_of_cells_per_row){
                j=j+no_of_cells_per_row1;
                logger.info("Jvalue: "+j);
                no_of_cells_per_row=no_of_cells_per_row+(no_of_cells_per_row1*2);
                logger.info("mathematical: "+no_of_cells_per_row);
              }
            }
          });
        }).then(function(){
          that.SubmitMeterReading_Multiregister();
        });
        return reading1;
      }
      catch(e)
      {
        logger.info("%@%@%@%@%:"+e.stack)
      }
    };

    /*Submiting Meter for Multi meter*/
    this.SubmitMeterReading_Multiregister = function()
    {
      try{
        var no_of_cells_per_row2=no_of_cells_per_row1;
        var startingString=0;
        var Z = new Array(no_of_readings);
        var no_of_cells_per_row3=no_of_cells_per_row1;
        var no_of_cells_per_reading=(no_of_cells/no_of_readings);

        c = no_of_readings + 7;

        for(var s=1;s<=no_of_readings;s++)
        {
          this.SelectDateForMultiMeter(s);
          Z[s-1] = reading1.slice(startingString,no_of_cells_per_row2);
          startingString=startingString+no_of_cells_per_row1;
          no_of_cells_per_row2=no_of_cells_per_row2+no_of_cells_per_row1;
          logger.info("Z[(s-1)]:"+Z[(s-1)]);
          var x =parseInt(Z[(s-1)]);
          var previousmeterread=(x+1).toString(10);
          while(previousmeterread.length<no_of_cells_per_row1){
            previousmeterread="0"+previousmeterread;
          }
          MeterReadValues.push(previousmeterread);
          logger.info("Meter read value after slice:******" +MeterReadValues[s-1]);
          element(by.xpath('.//*[@class="container meter-detail"]/div/div/div['+c+']//*[@data-test-dial="0"]')).sendKeys(previousmeterread);
          c = c + 6;
        }
      }
      catch(e)
      {
        logger.info("Infinte Exception is*****************: "+e.stack);
      }
    };

    /*Select Date For MultiMeter*/
    this.SelectDateForMultiMeter = function(arg)
    {
      try {
        browser.executeScript('window.scrollTo(0,1000);').then(function () {
          element(by.xpath('(//*[@class="date-picker col-lg-4 col-md-6 col-12 mb-3 p-0"])['+arg+']/div/input')).isDisplayed();
        });
        var num = 1;
        var DateElement = element(by.xpath('(//p[@class="my-1"])['+num+']/strong'));
        DateElement.getText().then(function(text){
          date = text;
          console.log("Actual Date  is:"+date);
          var splitdate = date.split(" ");
          var day=splitdate[0];
          var month=splitdate[1];
          var year=splitdate[2];
          day = +day +1;
          bot.clickAction(element(by.xpath('(//*[@class="form-control ember-view"])['+arg+']')));
          bot.clickAction(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+arg+']')));
          bot.clickAction(element(by.xpath('(//select[@class="pika-select pika-select-year"])['+arg+']//option[text()='+year+']')));
          browser.sleep(500);
          bot.clickAction(element(by.xpath('(//select[@class="pika-select pika-select-month"])['+arg+']')));
          element(by.xpath('(//select[@class="pika-select pika-select-month"])['+arg+']//option[text()="'+month+'"]')).click();
          element(by.xpath('(//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"])['+arg+']')).click();
        });
      }catch(e)
      {
        logger.info("Message is @#@#@@:"+e.stack);
      }
    };

    /*Get Reminder section text verification*/
    this.GetRemiderVerfication =function()
    {
      util.waitUntilElementToBeClickable(CheckBox);
      bot.CompareText(GetReminderCheck,GetReminderText);
      bot.CompareText(CheckBoxText,CheckBoxMessage);
    };

    /*Submit Reminder form*/
    this.SubmitReminderForm = function()
    {
      bot.clickAction(CheckBox);
      bot.clickAction(TitleBox);
      bot.clickAction(TitleOption);
      bot.enterText(Firstname,"Test");
      bot.enterText(lastName,"Tester");
      bot.clickAction(ReminderSubmitButton);
    };

    /*Verification on Reminder submission*/
    this.VerificationReminderSubmission = function()
    {
      util.waitUntilVisibility(RemiderSuccessfulmessage);
      bot.CompareText(RemiderSuccessfulmessage,GetReminderMessage);
    };

    /*Verify already submitted submitted message*/
    this.VerifyAlreadySubmitted = function()
    {
      if(AlreadySubmitted.isPresent()){
        bot.CompareText(AlreadySubmitted,"Submitted");
      }
      else
      {
        logger.info("I am in for sdubmitting on day submission")
        this.retriveMeterDetails_MultipleReigiter();
        this.SubmitButton();
        util.waitUntilVisibility(ConfirmationPageTitle);
        browser.navigate().back();
        this.FetchingInputs();
        this.NextButton();
        bot.CompareText(AlreadySubmitted,"Submitted");
      }
    };
    }; module.exports = new ASMR();
