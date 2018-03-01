/**********************************************************
Reporter Configuration File for Cucumber
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/
var AllureReporter = require('cucumberjs-allure-reporter');
//     XML suite files gets stored in Folder Report
AllureReporter.config(
      {
            targetDir:'Report'
      }
);
this.reportPass = function (stepName) {

     if(browser.params.takeScreenshotsForPass){

       browser.takeScreenshot().then(function (png) {
          allure.createStep(stepName, function() {

             allure.createAttachment('Screenshot_'+stepName.substr(0, stepName.length<30?stepName.length:30), function () {return new Buffer(png, 'base64');},'image/png')();

         })();

        });
     }else{
       allure.createStep(stepName, function() {})();
     }

     if(allure._allure.getCurrentTest().status!='failed'){
       allure._allure.endCase('passed', new Error(stepName), Date.now());
       }



   };
   this.reportFail = function (stepName, err) {

      	var that = this;
      	return browser.takeScreenshot().then(function (png) {
      		that.createFailStep(stepName, function() {
      			testStatus=false;
      	        allure.createAttachment(stepName.substr(0, stepName.length<30?stepName.length:30), function () {return new Buffer(png, 'base64');},'image/png')();

      	})();

      }).then(function(){
      	var newErr = new Error(stepName);
      	if(err!=undefined){
      		newErr.stack= err.stack;
      	}
      	throw newErr;
      });
      };
      this.reportFailStep = function (stepName) {

         	var that = this;

     		return browser.takeScreenshot().then(function (png) {
         		that.createFailStep(stepName, function() {
         			testStatus=false;
         	        allure.createAttachment(stepName.substr(0, stepName.length<30?stepName.length:30), function () {return new Buffer(png, 'base64');},'image/png')();

         	})();

         });


         };
         this.createFailStep = function (name,stepFunc) {

             	   var that = allure;

             	    return function() {
             	        var stepName = that._format(name, Array.prototype.slice.call(arguments, 0)),
             	            status = 'failed',
             	            result;
             	        that._allure.startStep(stepName);
             	        try {
             	            result = stepFunc.apply(this, arguments);
             	        }
             	        catch(error) {
             	            status = 'failed';
             	            throw error;
             	        }
             	        finally {
             	            if(that.isPromise(result)) {
             	                result.then(function() {
             	                    that._allure.endStep('failed');
             	                }, function() {
             	                    that._allure.endStep('failed');
             	                });
             	            } else {
             	                that._allure.endStep(status);
             	            }
             	        }
             	        that._allure.endCase(status, new Error(name), Date.now());
             	        return result;
             	    };

             };


module.exports=AllureReporter;
