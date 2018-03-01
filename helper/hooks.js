module.exports = function(){

    this.registerHandler('StepResult', function (stepResult, callback) {
      console.log("Screenshot attached")
        if ((stepResult.getStatus() == 'passed')||(stepResult.getStatus() == 'failed')){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function(){ return new Buffer(png, 'base64')}, 'image/png')();
                callback();
            });

        } else {
            callback();
        }
    });
}
