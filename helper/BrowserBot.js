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

var XLSX = require('../node_modules/xlsx');


var BrowserBot = function() {

  var log4js = require('log4js');
  var logger = log4js.getLogger();
  var count=0;
    /*
    Method Name: launchUrl
    Purpose    : to call the URL
    */
    this.launchUrl=function(url) {
       browser.get(url);
       logger.info("Loading URL:" + url);
    };
    /*
    Method Name: enterText
    Purpose    : to enter text in Text Box
    */
    this.enterText=function(ele, value) {
        ele.sendKeys(value);
        logger.info("Entering the value " + value + " into the field " + ele.locator());
    };
    /*
    Method Name: clickAction
    Purpose    : to Click any Button in the Webpage
    */
    this.clickAction=function(ele) {
       ele.click();
       logger.info("Clicking on Element " + ele.locator());
    };
    /*
    Method Name: clickAction JS
    Purpose    : to Click any Button in the Webpage using Javascript
    */
    this.clickActionJS=function(ele)
    {
      var element = ele;
      browser.executeScript("arguments[0].click()",element);
      logger.info("Clicking on Element " + ele.locator());
    };
    /*
    Method Name: doubleClick
    Purpose    : to Double Click any Button in the Webpage
    */
    this.doubleClick=function(ele) {
        browser.actions().doubleClick(ele).perform();
        logger.info("Double Clicking on Element " + ele.locator());
    };

    /*
    Method Name: dragAndDrop
    Purpose    : to drag and drop any element in the Webpage
    */
    this.dragAndDrop=function(eleDrag,eleDrop) {
        browser.actions()
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

      element.all(elefilter).filter(function(elem, index) {
        return elem.getText().then(function(text) {
          return text === 'value';
        });
      }).first().click();
        logger.info("Filter the Element " + elefilter.locator());
    };

    /*
    Method Name: CompareText
    Purpose    : to get the Text of any element present in the Webpage and compare with input
    */
    this.CompareText=function(ele,ele1) {
        ele.getText().then(function(text)
        {
          text = text.trim();
          if(text == ele1){
            logger.info("****************  "+text+" and "+ele1+" are Same");
          }else{
            logger.info("****************  "+text+" and "+ele1+" are not Same");
          }
          return text;
        });
        logger.info("Getting Text of Element and compare" + ele.locator());
    };

    /*
    Method Name: CompareText
    Purpose    : to get the Text of any element present in the Webpage and compare with input
    */
    this.CompareTextwithvalueAndSlice=function(ele,ele1) {

      ele.getText().then(function(text)
      {
        text = text.slice(2);
        text = text.trim();
        if(text == ele1){
          logger.info("****************  "+text+" and "+ele1+" are Same");
        }else{
          logger.info("****************  "+text+" and "+ele1+" are not Same");
        }
        return text;
      });
      logger.info("Getting Text of Element and compare" + ele.locator());
  };


    /*
    Method Name: CompareTextvalues
    Purpose : to get the Text of any 2 elements present in the Webpage and compare
    */

    this.CompareTextvalues = function (ele, ele1,text1,text2) {

       ele.getText().then(function(text) {
            text1 =  text;
            logger.info("text retrived is "+text1);
            ele1.getText().then(function(text) {
                text2 =  text;
                if (text1 === text2) {
                    logger.info("**************** " + text1 + " and " + text2 + " are Same");
                } else {
                    logger.info("**************** " + text1 + " and " + text2 + " are not Same");
                }
        });

    });

        logger.info("Getting Text of Element" + ele.locator() + "and" + ele1.locator()+ "then compare" );
    };

    /*
    Method Name: ReadExcel
    Purpose    : to fetch value from excel
    */
    this.excelread = function (file,sheet,rows,column) {

            var workbook = XLSX.readFile(file);
            var worksheet = workbook.Sheets[sheet];
            var cell_value = column+rows;
            var read = worksheet[cell_value].v;
            logger.info("&&&&&&&&&&&&& : "+read);
            return read;

    };

    /*
    Method Name: getText and compare
    Purpose    : to get the Text of any element present in the Webpage and compare
    */
    this.getElementText=function(ele,ele1) {
        ele.getText().then(function(text)
        {
          if(text === ele1){
            logger.info("****************  "+text+" and "+ele1+" are Same");
          }else{
            logger.info("****************  "+text+" and "+ele1+" are not Same");
          }
          return text;
        });
        logger.info("Getting Text of Element and compare" + ele.locator());
    };

    /*Assertion usong ExpectedConditions
    Method Name: getText and compare using Assertion
    Purpose    : to get the Text of any element present in the Webpage and compare
    */

   this.Expectequals = function(ele,ele1)
   {
  //   expect(ele.getText()).to.eventually.equal(ele1);
     assert.equal(ele.getText(),ele1);
     logger.info("*****Values are same*******")
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
    Method Name: count
    Purpose    : to verify the presence of any element in the Webpage
    */
    this.GetCount=function(ele) {
        return ele.count();
        logger.info("get size of the Element" + ele.locator());

    };
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
      /*
      Method Name: list Box Xpath
      Purpose    : Select Values from list box
      */

     this.listbox=function(ele)
    {
         ele.click();
         logger.info("Clicking Element form list box" + ele.locator());
    };

    /*
    Method Name: list Box CSS
    Purpose    : Select Values from list box
    */
     this.listboxCSS=function(ele)
     {
      //browser.driver.findElement(By.css(value).replaceAll("i",""+4));
      var str = ele;
      str = str.replace('num','4');
      logger.info("String:"+str.locator());
      logger.info("Selecting Value from list box" +ele.locator());
     };

    this.dropdownselect=function(value,index)
    {
       var desiredOption = desiredImageEditor.$(value);
       desiredImageEditor.sendKeys(index)
    };
};
module.exports = new BrowserBot();
