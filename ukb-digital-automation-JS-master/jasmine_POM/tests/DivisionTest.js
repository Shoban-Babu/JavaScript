describe('Division Test', function() {
  var calculatorPage = require('../pages/CalculatorPage.js');
  var excel = require('../../helper/excelread.js');
  var using = require('jasmine-data-provider');
  var data = require('../../data/testdata.json');
  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var firstvalue = excel.getValue('../jasmine_POM/tests/DivisionTest.js', 'FirstValue');
  var secondvalue = excel.getValue('../jasmine_POM/tests/DivisionTest.js', 'SecondValue');
  var url = excel.getValue('../jasmine_POM/tests/DivisionTest.js', 'url');
  var expectedAdditionValue = excel.getValue('../jasmine_POM/tests/DivisionTest.js', 'expectedAdditionValue');


   beforeEach(function() {
    logger.info("  ");
    logger.info("*****************************************************************************************");
   });

  afterEach(function() {
    logger.info("*****************************************************************************************");
   });

  var mySpec = it('Division of two values', function() {
    logger.info("Starting the Spec: " + mySpec.getFullName());
      calculatorPage.load(url);
      calculatorPage.division(firstvalue,secondvalue);
      calculatorPage.expectValue(expectedAdditionValue.toString());
    logger.info("Ending the Spec: " + mySpec.getFullName());
  });

});
