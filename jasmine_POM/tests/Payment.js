describe('PaymentTest', function() {
    var PaymentPage = require('../pages/PaymentPage.js');
    var excel = require('../../helper/excelread.js');
    var using = require('jasmine-data-provider');
    var data = require('../../data/testdata.json');
    var log4js = require('log4js');
    var logger = log4js.getLogger();

  var Loginusrname = excel.getValue('../cucumber_POM/features/Payment.js','Loginusrname');
  var Loginpwd =excel.getValue('../cucumber_POM/features/Payment.js','Loginpwd');
  var Paymentamount = excel.getValue('../cucumber_POM/features/Payment.js','Paymentamount');
  var Cardno =excel.getValue('../cucumber_POM/features/Payment.js','Cardno');
  var CardName = excel.getValue('../cucumber_POM/features/Payment.js','CardName');
  var Srccode =excel.getValue('../cucumber_POM/features/Payment.js','Srccode');
  var url = excel.getValue('../jasmine_POM/tests/Payment.js', 'url');
  var expectedValue = excel.getValue('../cucumber_POM/features/Payment.js','Value');




    beforeEach(function() {
        logger.info("  ");
        logger.info("*****************************************************************************************");
    });

    afterEach(function() {
        logger.info("*****************************************************************************************");
    });

    var mySpec = it('make payment in login', function() {
        logger.info("Starting the Spec: " + mySpec.getFullName());
        PaymentPage.load(url);
        PaymentPage.login(Loginusrname,Loginpwd);
        PaymentPage.movetopay(Paymentamount);
    //    PaymentPage.makepayment(Cardno, CardName,Srccode);
    //    PaymentPage.expectValue();
        logger.info("Ending the Spec: " + mySpec.getFullName());
    });


});
