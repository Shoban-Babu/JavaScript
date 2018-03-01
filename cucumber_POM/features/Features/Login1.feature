Feature: Perform Login in "British Gas" business application

  Scenario: User should able to login while provide valid email and password
    Given the url to perform Login
    When User  navigate to business Login page
    When User  enter the email address and password and clicks on login button
    Then User should navigate to Account overview page.
