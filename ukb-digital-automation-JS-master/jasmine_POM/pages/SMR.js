var SMRPage = function () {

  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var bot = require('../../helper/BrowserBot.js');
  var until = require('../../helper/Until.js');
  var excel = require('../../helper/excelread.js');
  var data = require('../../data/testdata.json');
  var expect = require('expect');

    //************************************** Feature details from DataSheet.xlsx ******************************************
    var FeatureName = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Featurename');
    var Priority = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Priority');

  //************************************** Object Locators on Page ******************************************
 var reporteroption=require('../../helper/ReporterOptions.js')
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
  var meterreg1 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[1])[1]/div/input'));
  var meterreg2 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[2])[1]/div/input'));
  var meterreg3 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[3])[1]/div/input'));
  var meterreg4 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[4])[1]/div/input'));
  var meterreg5 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[5])[1]/div/input'));
  var meterreg6 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[6])[1]/div/input'));
  var meterreg7 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[7])[1]/div/input'));
  var meterreg8 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[8])[1]/div/input'));
  var meterreg9 = element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[9])[1]/div/input'));
  var Nmeterreg1 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[1])[2]/div/input'));
  var Nmeterreg2 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[2])[2]/div/input'));
  var Nmeterreg3 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[3])[2]/div/input'));
  var Nmeterreg4 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[4])[2]/div/input'));
  var Nmeterreg5 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[5])[2]/div/input'));
  var Nmeterreg6 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[6])[2]/div/input'));
  var Nmeterreg7 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[7])[2]/div/input'));
  var Nmeterreg8 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[8])[2]/div/input'));
  var Nmeterreg9 =element(by.xpath('(//*[@class="col-12 pl-2 ml-1"]/div/div/div/div[9])[2]/div/input'));

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
  
   //************************************** Test data from DataSheet.xlsx ******************************************

  var Date1 =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date1');
  var Date2 = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date2');
  var Date3 =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date3');
  var Date4 = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date4');
  var Date5 =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date5');
  var Date6 = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date6');
  var Date7 =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date7');
  var Date8 = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date8');
  var Date9 =excel.getValue('../cucumber_POM/features/Features/SMR.feature','Date9');
  var valueX = Date1+","+Date2+","+Date3+","+Date4+","+Date5+","+Date6+","+Date7+","+Date8+","+Date9;
 
  
  this.Accountoverview = function () {
    reporteroption.addFeature(FeatureName);
    reporteroption.addSeverity(Priority);
    browser.sleep(20000);
     bot.clickAction (acctlink);
     return bot.clickAction(BGSubmitMeterReadLink);
    //  console.log(valueX);
   };

   this.fetchReadingValue = function (value1) {
    //  var that=this;
    //  var result=that.retrieveAndFillAccountDetails();
    var DateArray=value1.split(",");
       var splitdate=value1.split("-");
       var day=splitdate[0];
       var month=splitdate[1];
       var year=splitdate[2];
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

   var splitdate=DateArray[(z-1)].split(" ");
   var day=splitdate[0];
   var month=splitdate[1];
   var year=splitdate[2];
          element(by.xpath('(//*[@class="date-picker col-12 col-lg-10 p-0"])['+z+']/div/input')).click();
          element(by.xpath('(//select[@class="pika-select pika-select-year"])['+z+']')).click();
          element(by.xpath('(//select[@class="pika-select pika-select-year"])['+z+']//option[text()="'+year+'"]')).click();

         // element(by.xpath('(.//*[@class="pika-prev"])['+z+']')).click();
          element(by.xpath('(//select[@class="pika-select pika-select-month"])['+z+']')).click();
          element(by.xpath('(//select[@class="pika-select pika-select-month"])['+z+']//option[text()="'+month+'"]')).click();

             //element(by.xpath('(.//*[@class="pika-prev"])['+z+']')).click();
           //  browser.sleep(20000);
         element(by.xpath('(//button[@class="pika-button pika-day" and @data-pika-day="'+day+'"])['+z+']')).click();
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

        that.fetchReadingValue(valueX);
      });
return reading1;
     };


     this.submitmeter = function () {
      return  bot.clickAction (subbtn);
      };



};



module.exports = new SMRPage();
