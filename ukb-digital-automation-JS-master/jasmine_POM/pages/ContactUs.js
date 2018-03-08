var ContactUs = function(){

var log4js = require('log4js');
var logger = log4js.getLogger();

//Declar Variables
var bot = require('../../helper/BrowserBot.js');
var ApaymentLink = element(By.css('.default-button a[href*="make-a-payment"]'));
var contactusLink = element(by.css('div.ukb-head-topnav  a[href*="contactus"]'));
var firstlistoption = element(By.css('.ember-power-select-placeholder'));
var firstlistoptionsize = element.all(By.css('.ember-power-select-options'));
var selectqureyFirst = element(By.css('.ember-power-select-options li:nth-child(4)'));
//var selectfirstoptionxpath = element(By.xpath('.//*[@class="ember-power-select-options ember-view"]/li[num]'));
var secondlistption = element(By.css('.ember-power-select-placeholder'));
var selectquerysecond = element(By.css('.ember-power-select-options li:nth-child(1)'));
var Businessbutton = element(By.css('a[href*="query"]'));
var Accountnumber = element(by.name('customerQuery.contractAccountNumber'));
var title = element(by.xpath('.//*[@class="col-12 col-lg-5 col-md-8"]/div[2]/div/div/div/div'));
var selectTitle = element(By.xpath('.//li[text()="Mr"]'));
var FirstName = element(By.name('customerQuery.contactPersonDetails.first-name'));
var LastName = element(By.name('customerQuery.contactPersonDetails.last-name'));
var BusinessName = element(By.name('customerQuery.businessName'));
var EmailAddress = element(By.name('customerQuery.contactPersonDetails.email'));
var PhoneNumber = element(By.name('customerQuery.contactPersonDetails.telephone-number'));
var PostCode = element(By.name('postcode'));
var FindAddressButton = element(By.css('.btn-secondary'));
var postcodeDropdown = element(By.css('.ember-power-select-placeholder'));
var Query = element(By.name('customerQuery.query'));
var Firstlistboxoption = element(by.xpath('.//*[@class="contact-us"]/div/div[1]//*[@class="ember-power-select-trigger ember-basic-dropdown-trigger ember-view"]'));
var Secondlistboxoption = element(by.xpath('.//*[@class="contact-us"]/div/div[2]//*[@class="ember-power-select-trigger ember-basic-dropdown-trigger ember-view"]'));
var size_of_listbox1 = "";
var ele1 = element(By.css('.ember-power-select-options li'));
var optionfirst='.ember-power-select-options li';

this.movetoContactUS = function()
{
    logger.info("i am in");
    bot.clickAction(contactusLink);
};

this.SelectFirstOption = function()
{
   bot.clickAction(Firstlistboxoption);
};

this.SelectQuery = function()
{
  this.SelectFirstOption();
   browser.sleep(1000);
     element.all(by.css(optionfirst)).then(function(items){
    size_of_listbox1=items.length;
      });   

};

this.ClickBusinessTab = function()
{
  logger.info("&&&&&&:"+size_of_listbox1);
  browser.sleep(1000);
  for(var i=2;i<=size_of_listbox1;i++)
  {
    logger.info("&&&&&&:"+size_of_listbox1);
    var data = element(by.css('.ember-power-select-options li:nth-child('+i+')'));
    bot.clickAction(data);
    browser.sleep(500);
    bot.clickAction(Secondlistboxoption);
    bot.clickAction(selectquerysecond);
    ClickBusinessTab();
    ContactUsentervalues();
    SelectFirstOption();
  }
  browser.sleep(500);
  bot.clickAction(Businessbutton);

};

this.ContactUsIteration = function()
{
  var tier1 = bot.GetCount(firstlistoptionsize);
  logger.info("First Tier Option count is:"+tier1);
}

this.ContactUsentervalues = function()
{
   browser.sleep(1000);
   bot.enterText(Accountnumber,"601111756");
   bot.clickAction(title);
   bot.clickAction(selectTitle);
   bot.enterText(FirstName,"Shoban");
   bot.enterText(LastName,"Babu");
   bot.enterText(BusinessName,"Shoban LLC")
   bot.enterText(EmailAddress,"shobanbabu@test.com");
   bot.enterText(PhoneNumber,"08608996525");
   bot.enterText(PostCode,"NG9 2LG");
   browser.sleep(1000);
   browser.executeScript('window.scrollTo(0,10000);').then(function () {
   bot.clickAction(FindAddressButton);
   });
   bot.clickAction(postcodeDropdown);
   bot.clickAction(selectquerysecond);
   bot.enterText(Query,"Tets");
   browser.navigate().back();
   browser.actions().sendKeys(protractor.Key.HOME).perform();
};

};
module.exports = new ContactUs();
