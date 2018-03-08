Feature: Perform Registration in "British Gas" business application

  Background:
      Given  User is on "https://193.67.163.141/business/"
@Regvalid  @regvalid
  Scenario: User should able to register while provide valid email and account details
      When User navigates to Register page
      When User enter the email address and click on Next button
      When User give the Account details and click on Next button
      Then the activation email message should be displayed

@Reginvalid
  Scenario: User shouldnot be able to register while provide invalid email and account details
      When User navigates to Register page
      When User enter the invalidemail address and click on Next button
      Then User will get registration error " Please enter a valid email address".
