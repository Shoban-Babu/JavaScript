

//Decalaring variables
var ContactUs = require('../../jasmine_POM/pages/ContactUs.js');


//Declaring Logger
var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports =function(){

  this.setDefaultTimeout(120 * 1000);

    this.When(/^User navigate to business Contact US page$/,function(){
       logger.info("i am successfully in");
       ContactUs.movetoContactUS();
    });

   this.When(/^User select Contact US query$/,function()
   {
     ContactUs.SelectQuery();
    });

    this.When(/^User click Make A payment button$/,function()
    {
     ContactUs.ClickBusinessTab();
    // ContactUs.ContactUsentervalues();
    });
};
