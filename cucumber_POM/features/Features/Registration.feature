Feature: Perform Registration in "British Gas" business application

  Scenario: User should able to register while provide valid email and account details
  Given the url to perform Registration
  When User  navigates to Register page
  When User enter the email address and click on Next button
  When User enter the Account number Postcode and click on Next button
  When User enter security question for last amount paid and click on Next button
  When User enter Contact details check Terms and Conditions and submit the registration form
  Then the activation email message should be displayed
