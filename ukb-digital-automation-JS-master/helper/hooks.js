// // module.exports = function(){
// // // var cucumber=require('../node_modules/cucumber/lib/cucumber/api/scenario.js');
// //     this.registerHandler('StepResult', function (stepResult, callback) {
// //       console.log("Screenshot attached")
// //         if ((stepResult.getStatus() == 'passed')||(stepResult.getStatus() == 'failed')){
// //             // driver.takeScreenshot().then(function (buffer) {
// //             //     return scenario.attach(new Buffer(buffer, 'base64'), 'image/png');
// //             //  // };
            
// //             browser.takeScreenshot().then(function (png) {
// //                 allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();
// //                 callback();
// //             });

// //         } else {
// //             callback();
// //         }
// //     });
// //     this.registerHandler('AfterFeatures',function(event,callback)
// // {
// //     browser.close().then(function()
// // {
// //     callback();
// // });
// // });
// //     //this.scenario=cucumber.
// //    //this.registerHandler('StepResult',function(stepresult,callback){
// //    // if ((stepresult.getStatus() == 'passed')||(stepresult.getStatus() == 'failed')){
// //     this.After((step) => {
// //          return browser.takeScreenshot().
// // then(screenshot => step.attach(new 
// // Buffer (screenshot, 'base64'), 'image/png'));

// // });
// module.exports = function(){
// //     this.registerHandler('BeforeScenario',function(scenario)
// // {
// //     console.log("DEleting Cookies");
// //    return browser.manage().deleteAllCookies();
// //     // callback();
// //     //browser.executeScript('window.localStorage.clear();');
// //         //    done();
// // });
//     // var cucumber=require('../node_modules/cucumber/lib/cucumber/api/scenario.js');
//        this.registerHandler('StepResult', function (stepResult, callback) {
//         // browser.manage().deleteAllCookies();
//         if(stepResult.getStatus()=='failed')
//         {
//             console.log("Failed");
//             browser.takeScreenshot().then(function (png) {
//                 allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();
              
//          //browser.close();
//          callback();
//         });
//         }
//             if (stepResult.getStatus() == 'passed'){
//                 console.log("Passed")
//                 // driver.takeScreenshot().then(function (buffer) {
//                 //     return scenario.attach(new Buffer(buffer, 'base64'), 'image/png');
//                  // };
                
//                 browser.takeScreenshot().then(function (png) {
//                     allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();
//                     callback();
//                 });
    
//             }
//             //  else {
//             //     console.log("After Sceanrio");
//             //     //browser.close();
//             //    // callback();
//             // }
//         });


//         // this.After((scenario, callback) => {
//         //     browser.takeScreenshot().then(stream => {
//         //         var decodedImage = new Buffer(stream, 'base64');
//         //      //   let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
//         //         scenario.attach(stream, 'image/png');
//         //         callback();
//         //     }, function (err) {
//         //         callback(err);
//         //     });
//         // });
//    //     console.log("Step executed");
    
// //    });
    
      
//     // this.registerHandler('AfterFeatures', function (event, callback) {
//     //     browser.close()
//     //         .then(function () {
//     //             callback();
//     //         });
//     // });

// // }
// // this.registerHandler('BeforeScenario',function(scenario)
// // {
// //     console.log("DEleting Cookies");
// //     // {
// //    return browser.manage().deleteAllCookies();
// //     // callback();
// //     //browser.executeScript('window.localStorage.clear();');
// //         //    done();
// //     // });
// // });
//     }
module.exports = function(){
    // var cucumber=require('../node_modules/cucumber/lib/cucumber/api/scenario.js');
       this.registerHandler('StepResult', function (stepResult, callback) {
        if(stepResult.getStatus()=='failed')
        {
            console.log("After Sceanrio Finished");
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();
              
        // browser.close();
         callback();
        });
        }
            if (stepResult.getStatus() == 'passed'){
                console.log("Screenshot attached")
                // driver.takeScreenshot().then(function (buffer) {
                //     return scenario.attach(new Buffer(buffer, 'base64'), 'image/png');
                 // };
                
                browser.takeScreenshot().then(function (png) {
                    allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();
                    callback();
                });
    
            }
            //  else {
            //     console.log("After Sceanrio");
            //     //browser.close();
            //    // callback();
            // }
        });
// this.registerHandler('StepResult' ,function (stepResult, callback) 
// {   if(stepResult.getStatus()=='failed')
// {
//     console.log("After Sceanrio Finished");
// browser.close();
// }
// });
        // this.AfterScenario(function(scenario, callback) {
        //     console.log("After Sceanrio");
        //     browser.close();
        //     callback();
        //   });
        //this.scenario=cucumber.
       //this.registerHandler('StepResult',function(stepresult,callback){
       // if ((stepresult.getStatus() == 'passed')||(stepresult.getStatus() == 'failed')){
    //     this.After((step) => {
    //          return browser.takeScreenshot().
    // then(screenshot => step.attach(new 
    // Buffer (screenshot, 'base64'), 'image/png'));
    
    // });
    
            // this.After((scenario, callback) => {
            //     browser.takeScreenshot().then(stream => {
            //         var decodedImage = new Buffer(stream, 'base64');
            //      //   let decodedImage = new Buffer(stream.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64');
            //         scenario.attach(stream, 'image/png');
            //         callback();
            //     }, function (err) {
            //         callback(err);
            //     });
            // });
       //     console.log("Step executed");
        
    //    });
        
          
        // this.After('AfterFeatures', function (event, callback) {
        //     browser.close()
        //         .then(function () {
        //             callback();
        //         });
        // });
        // this.After(function () {
        //     // Assuming this.driver is a selenium webdriver
        //     return this.driver.quit();
        //   });
    
 }
    
