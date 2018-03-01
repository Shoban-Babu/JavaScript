var SMRPage = function () {

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
    var BGSubmitMeterReadLink = element(by.xpath('(//*[@class="ember-view"]/ul/li[2]/a)[1]'));
    var BGDatePicker = element(by.css('div.date-picker'));
    var BGpreviousdatePicker = element(by.xpath('.//*[@class="pika-prev"]'));
    var BGDateselector = element(by.xpath('//*[@class="pika-lendar"]/table/tbody/tr[4]/td[3]'));
    var BGDailsInput = element(by.xpath('.//*[@class="meter-details"]/div[3]/div[2]/div[2]/div[2]//*[@class="meter-register"]//input[@data-test-dial="0"]'));
    var BGSubmitButton = element(by.css('button[class*="submit-button"]'));
    var BGCancelbutton = element(by.css('button[class*="cancel-button"]'));
    var BGconfirmationtext = element(by.xpath('.//h5[@class="m-0"]'));
    var acctlink = element(by.xpath('//*[@class="account-row__fuel-type-icon fa ukb-icon-gas"]'));
    //var meterreg = element(by.xpath('(//div[@class="col-12 pl-2 ml-1"]/div/div/div/div[1])[1]/div/input'));
    var meterreg1 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[1])[1]/div/input'));
    var meterreg2 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[2])[1]/div/input'));
    var meterreg3 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[3])[1]/div/input'));
    var meterreg4 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[4])[1]/div/input'));
    var Nmeterreg1 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[1])[2]/div/input'));
    var Nmeterreg2 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[2])[2]/div/input'));
    var Nmeterreg3 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[3])[2]/div/input'));
    var Nmeterreg4 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[4])[2]/div/input'));
    var pickmonth = element(by.css('select[class*="pika-select-month"]  option')) ;
    var pickday = element(by.css('tr[class="pika-row"] td[data-day="10"]')) ;
    var todaydate=element(by.xpath('//*[@class="pika-row"]/td[@class="is-today is-selected"]'));
    var subbtn = element(by.css('button[class*="submit-button"]'));

    var no_of_readings = "";
    var no_of_rows = "";
    var no_of_cells = "";
    var no_of_cells_per_row = "";
    var no_of_cells_per_row1 = "";
    var reading = "";
    var reading1 = "";
    var X1;
    var weekcount="";
    var daycount="";




    this.load = function (url) {
      //  bot.launchUrl("https://193.67.163.83/business");
        bot.launchUrl("https://193.67.163.141/business");

    };

    this.navigate = function () {
        bot.clickAction(Loginlink);

    };
    this.login = function (Email, Password) {

      //bot.enterText(email,"bgbwp43@wp.com");
    //  bot.enterText(password, "password123");
        bot.enterText(email,"gopinath.muthukrishnan@cognizant.com");
       bot.enterText(password, "password12");
        bot.clickAction(Loginbtn);
    };
    this.Accountoverview = function () {
      // bot.clickAction (acctlink);
       bot.clickAction(BGSubmitMeterReadLink);
     };

     this.fetchReadingValue = function (date) {
     //  var that=this;
     //  var result=that.retrieveAndFillAccountDetails();

         var startingString=0;
         var no_of_cells_per_row2=no_of_cells_per_row1;
         var z1=new Array(no_of_readings);
         var no_of_cells_per_row3=no_of_cells_per_row1;
         var no_of_cells_per_reading=(no_of_cells/no_of_readings);
         var condition=no_of_cells_per_reading;

         for(var z=1;z<=no_of_readings;z++){

           z1[(z-1)]=reading1.slice(startingString,no_of_cells_per_row2);
           startingString=startingString+no_of_cells_per_row1;
           no_of_cells_per_row2=no_of_cells_per_row2+no_of_cells_per_row1;

           var x=parseInt(z1[(z-1)]);

           var A1=(x+1).toString(10);
           while(A1.length<no_of_cells_per_row1){
             A1="0"+A1;

           }
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
  for(var z=1;z<=no_of_readings;z++)
  {


           element(by.xpath('(//*[@class="date-picker col-12 col-lg-10 p-0"])['+z+']/div/input')).click();

           element(by.xpath('(.//*[@class="pika-prev"])['+z+']')).click();
              element(by.xpath('(.//*[@class="pika-prev"])['+z+']')).click();
          element(by.xpath('((.//td[@data-day="'+date+'"]))['+z+']')).click();
}
     };

     this.retrieveAndFillAccountDetails = function () {
       var that=this;
       var sym=",";
        element.all(by.xpath('//*[@class="col-12 p-2 mb-0 mb-sm-3"]')).then(function(items){

          no_of_readings=items.length;

        });

          element.all(by.xpath('//*[@class="col-12 pl-2 ml-1"]/div/div')).then(function(items){

            no_of_rows=items.length;

          });
          element.all(by.xpath('//*[@class="col-12 pl-2 ml-1"]/div/div/div/div')).then(function(items){

            no_of_cells=items.length;

            no_of_cells_per_row = (no_of_cells/no_of_rows);
            no_of_cells_per_row1=no_of_cells_per_row;

            browser.controlFlow().execute(
                  function () {


              for (var j=1;j<= no_of_cells;j++){
                if(j<=no_of_cells_per_row){
                element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div)['+j+']/div/input')).getAttribute('value').then(function(val){
                  reading=reading.concat(val);
                  reading1=reading;
                });
                }
              //  if(j==no_of_cells_per_row){
                //  reading=reading+"abc";
                //}

                if(j==no_of_cells_per_row){
                j=j+no_of_cells_per_row1;
                no_of_cells_per_row=no_of_cells_per_row+(no_of_cells_per_row1*2);
              }
              }

         });
       }).then(function(){

         that.fetchReadingValue("13");
       });
return reading1;
      };


      this.submitmeter = function () {
         bot.clickAction (subbtn);
       };



};
module.exports = new SMRPage();
