var CalculatorPage = function () {

    var bot = require('../../helper/BrowserBot.js');
    var until = require('../../helper/Until.js');
    var excel = require('../../helper/excelread.js');
    var expect = require('expect');
    var firstNumber = element(by.model('first'));
    var operator = element(by.model('operator'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.xpath('(//td[@class="ng-binding"])[2]'));
    var history = element.all(by.repeater('result in memory'));


    this.load = function (url) {
        bot.launchUrl(url);
    };

    this.add = function (firstvalue, secondvalue) {

        bot.enterText(firstNumber, firstvalue);
        bot.enterText(secondNumber, secondvalue);
        bot.clickAction(goButton);
    };

    this.subtraction = function (firstvalue, secondvalue) {
        bot.enterText(firstNumber, firstvalue);
        bot.enterText(operator, '-');
        bot.enterText(secondNumber, secondvalue);
        bot.clickAction(goButton);
    };

    this.multiplication = function (firstvalue, secondvalue) {
        bot.enterText(firstNumber, firstvalue);
        bot.enterText(operator, '*');
        bot.enterText(secondNumber, secondvalue);
        bot.clickAction(goButton);
    };
    this.division = function (firstvalue, secondvalue) {
        bot.enterText(firstNumber, firstvalue);
        bot.enterText(operator, '/');
        bot.enterText(secondNumber, secondvalue);
        bot.clickAction(goButton);
    };

    this.expectValue = function (value) {
        var status;
        var expectedValue = latestResult.getText();
        if (expectedValue == value) {
            return true;
        }
        else {
            return false;

        }
    };


};

module.exports = new CalculatorPage();
