var CalculatorPage = function () {

    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var expect = require('expect');
    var prot=require('protractor');
    var config=require('../../config_Files/cucumber_SeleniumConfig.js')
    var reporteroption=require('../../helper/ReporterOptions.js');
    var log4js = require('log4js');
    var logger = log4js.getLogger();
    var data = require('../../data/testdata.json');
  
//************************************** Feature details from DataSheet.xlsx ******************************************
      var FeatureName = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Featurename');
      var Priority = excel.getValue('../cucumber_POM/features/Features/SMR.feature','Priority');

//************************************** Object Locators on Page ******************************************


//************************************** Test data from DataSheet.xlsx ******************************************



//**************************************************************************************************************************


    this.load = function () {
    };

    this.add = function (firstvalue, secondvalue) {
        return 
    };

    this.subtraction = function (firstvalue, secondvalue) {
        return 
    };

    this.multiplication = function (firstvalue, secondvalue) {
        return 
    };
    this.division = function (firstvalue, secondvalue) {
        return 
    };




};

module.exports = new CalculatorPage();
