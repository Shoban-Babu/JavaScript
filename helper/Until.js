/**********************************************************
Helper File for all Explicit Wait
Framework : Protractor Automation Framework
Created By: CMT SAT Team
**********************************************************/

var Until = function() {

    var log4js = require('log4js');
    var logger = log4js.getLogger();
    var EC = protractor.ExpectedConditions;

// Waits until element to be clickable
    this.waitUntilElementToBeClickable = function (ele) {
        for (i = 0; i < 25; ++i) {
            ele.isPresent().then(function (value) {
              //  console.log('-------------------' + value);
                if (value) {
                    //console.log('-------------' + i);
                    return true;
                } else {
                    //console.log('-------------else' + jasmine.DEFAULT_TIMEOUT_INTERVAL);
                    browser.sleep(10000);
                    logger.info('Done - Pressed page down - ' + i);
                };
            });
        }
        return false;
    };
// Waits until Visibility of element
    this.waitUntilVisibility=function(ele) {
        browser.wait(EC.visibilityOf(ele), 20000);
        logger.info("Waiting for Element " + ele.locator() + " to be visable");
    };
// Waits until Invisibility of Element
    this.waitUntilInVisibility=function(ele) {
        browser.wait(EC.invisibilityOf(ele), 20000);
        logger.info("Waiting for Element " + ele.locator() + " to be Invisable");
    };

//  Waits for title to become something besides 'value'.
    this.waitUntilNot=function(value) {
        var titleIsNotFoo = EC.not(EC.titleIs(value));
        browser.wait(titleIsNotFoo, 20000);
        logger.info("Waiting Until the Title is not equal to "+value+"");
    };

//  Waits for title to contain 'value1', but is not 'value2'
    this.waitUntilAnd=function(value1,value2) {
        var titleContainsFoo = EC.titleContains(value1);
        var titleIsNotFooBar = EC.not(EC.titleIs(value2));
        browser.wait(EC.and(titleContainsFoo, titleIsNotFooBar), 20000);
        logger.info("Waiting Until the Title is equal to "+value1+" and not equal to "+value2+"");
    };

//  Waits for title to contain either 'value1' or 'value2'
    this.waitUntilOr=function(value1,value2) {
        var titleContainsFoo = EC.titleContains(value1);
        var titleContainsBar = EC.titleContains(value2);
        browser.wait(EC.or(titleContainsFoo, titleContainsBar), 20000);
        logger.info("Waiting Until the Title is equal to "+value1+" or "+value2+"");
    };

//  Waits for an alert pops up.
    this.waitUntilAletPresent=function() {
        browser.wait(EC.alertIsPresent(), 20000);
        logger.info("Waiting Until the alert is present");
    };

//  Waits for the element contain the text 'value'.
    this.waitUntilElementContainsText=function(ele, value) {
        browser.wait(EC.textToBePresentInElement(ele, value), 20000)
        logger.info("Waiting Until the Element contains the Text is equal to"+value+"");
    };

// Waits for the element contain the input 'value'.
    this.waitUntilElementContainsInput=function(ele, value) {
        browser.wait(EC.textToBePresentInElementValue(ele, value), 20000);
        logger.info("Waiting Until the Element contains the Input is equal to"+value+"");
    };

//  Waits for the title to contain 'value'.
    this.waitUntilTitleContains=function(ele, value) {
        browser.wait(EC.titleContains(value), 20000);
        logger.info("Waiting Until the Title contains the "+value+"");
    };

//  Waits for the element to be selected.
    this.waitUntilElementContainsText=function(ele) {
        browser.wait(EC.elementToBeSelected(ele), 20000);
        logger.info("Waiting Until the Element to be Selected");
    };

//  Waits for the URL to contain 'value'.
    this.waitUntilTitleContains=function(ele, value) {
        browser.wait(EC.urlContains(value), 20000);
        logger.info("Waiting Until the URL contains the "+value+"");
    };


};
module.exports = new Until();
