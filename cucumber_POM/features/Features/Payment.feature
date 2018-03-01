Feature: Make a Payment in "British Gas" business application

  Scenario: User should navigate to Payment page and make payment with valid card details
    Given the url to perform Login
    When User  navigate to business Login page
    When User  enter the email address and password and clicks on login button
    When User  clicks the make a payment link
    When User enter the payment card details and pay link displayed
    Then User payment confirmation page should be displayed
