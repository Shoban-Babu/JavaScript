/**********************************************************
Helper File of Reusuable Functions
Framework : Protractor Automation Framework
Created By: CMT SAT Team
List of Reusuable Function:
Method Name: launchUrl
Method Name: enterText
Method Name: clickAction
Method Name: doubleClick
Method Name: dragAndDrop
Method Name: switchToWindow
Method Name: switchToParentWindow
Method Name: switchToFrame
Method Name: getAttribute
Method Name: getText
Method Name: clearText
Method Name: isDisplayed
Method Name: takeScreenshot
**********************************************************/

var BrowserBot = function() {

  var log4js = require('log4js');
  var logger = log4js.getLogger();
var count=0;
var reporter=require('cucumber-html-reporter');
	var dir='Report';
	var sourcejson='cucumber.json';
	this.createhtmlreport=function(sourcejson)
	{
		var options={
			theme:'bootstrap',
			jsonFile:'cucumber.json',
			output:'HTML-report.html',
			reportSuiteAsScenarios:true,
			launchReport:true,
		};
		reporter.generate(options);
	};
    /*
    Method Name: launchUrl
    Purpose    : to call the URL
    */
    this.launchUrl=function(url) {
      
        return browser.get(url);
       logger.info("Loading URL:" + url);
    };
    /*
    Method Name: enterText
    Purpose    : to enter text in Text Box
    */
    this.enterText=function(ele, value) {
        return ele.sendKeys(value);
        logger.info("Entering the value " + value + " into the field " + ele.locator());
    };
    /*
    Method Name: clickAction
    Purpose    : to Click any Button in the Webpage
    */
    this.clickAction=function(ele) {
       return ele.click();
       logger.info("Clicking on Element " + ele.locator());
    }; 


    /*
    Method Name: doubleClick
    Purpose    : to Double Click any Button in the Webpage
    */
    this.doubleClick=function(ele) {
        return browser.actions().doubleClick(ele).perform();
        logger.info("Double Clicking on Element " + ele.locator());
    };
    /*
    Method Name: dragAndDrop
    Purpose    : to drag and drop any element in the Webpage
    */
    this.dragAndDrop=function(eleDrag,eleDrop) {
        return browser.actions()
            .mouseDown(eleDrag)
            .mouseMove(eleDrop)
            .mouseUp()
            .perform();
        logger.info("Drag and Drop the Element " + ele.locator());
    };


    /*
    Method Name: Filer
    Purpose    : to filter any element in the Webpage
    */
    this.filtersel=function(elefilter,index) {
   // provide only CSS or Xpath to elefilter and don't declare the object
      element.all(elefilter).filter(function(elem, index) {
        return elem.getText().then(function(text) {
          return text === 'value';
        });
      }).first().click();
        logger.info("Filter the Element " + elefilter.locator());
    };



    /*
    Method Name: Length
    Purpose    : to verify the presence of any element in the Webpage
    */
    this.GetLength=function(ele,size_of_listbox) {
        element.all(by.css(ele)).then(function(items){
            return  size_of_listbox=items.length;
            logger.info("get size of the Element" + size_of_listbox);

        }); 
    };


    /*
    Method Name: switchToWindow
    Purpose    : to Switch from current window to other window in the Webpage
    */
    this.switchToWindow=function() {
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[1]);
        });
        logger.info("Switching to New Window " );
    };
    /*
    Method Name: switchToParentWindow
    Purpose    : to Switch from child window to Parent window in the Webpage
    */
    this.switchToParentWindow=function() {
        browser.getAllWindowHandles().then(function (handles) {
            browser.driver.switchTo().window(handles[0]);
        });
        logger.info("Switching to Parent Window " );
    };
    /*
    Method Name: switchToFrame
    Purpose    : to Switch from one Frame to other Frame in the Webpage
    */


    this.switchToFrame=function() //  browser.driver.switchTo().frame(frame.getWebElement()).then(function()

{
      //  browser.switchTo().frame(frame);
        logger.info("Switching to New Frame " )

//
//});
  };

    /*
    Method Name: getAttribute
    Purpose    : to get the Attribute of any element present in the Webpage
    */
    this.getAttribute=function(ele,attributeType) {
      ele.getAttribute(attributeType).then(function (value) {
        return value;
      });
    };

    /*
    Method Name: getText
    Purpose    : to get the Text of any element present in the Webpage
    */
    this.getText=function(ele) {
        return ele.getText();
        logger.info("Getting Text of Element" + ele.locator());
    };
    /*
    Method Name: clearText
    Purpose    : to clear the Text of any Text box in the Webpage
    */
    this.clearText=function(ele) {
        return ele.clear();
        logger.info("Clearing the Text" + ele.locator());
    };
    /*
    Method Name: isDisplayed
    Purpose    : to verify the presence of any element in the Webpage
    */
    this.isDisplayed=function(ele) {
        return ele.isDisplayed();
        logger.info("Verifying the Element" + ele.locator());
    };

    /*
    Method Name: isPresent
    Purpose    : to verify the presence of any element in the Webpage
    */
    this.isPresent=function(ele) {
        return ele.isPresent();
        logger.info("Verifying the Element" + ele.locator());
    };

    /*
    Method Name: takeScreenshot
    Purpose    : to take screenshot in the Webpage
    */
    this.takeScreenshot=function(screenShotName) {
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, screenShotName+'.png');
        });
        function writeScreenShot(data, filename) {
            var stream = fs.createWriteStream(filename);
            stream.write(new Buffer(data, ''));
          stream.end();
        }
        logger.info("Taking Screenshot" );
    };



    /*
    Method Name: Date and Timestamp
    Purpose    : to verify the presence of any element in the Webpage
    */


    this.reportpathTimeStamp=function() {
        if(count==0) {
            var today = new Date();
            var hr = today.getHours();
            var min = today.getMinutes();
            var sec = today.getSeconds();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (dd < 10) {
                dd = '0' + dd
            }
            if (mm < 10) {
                mm = '0' + mm
            }
            today = yyyy + '-' + mm + '-' + dd + '_' + hr + '-' + min + '-' + sec;
            var timeStamp = new String(today);
            return timeStamp;
        };

};



};
module.exports = new BrowserBot();
