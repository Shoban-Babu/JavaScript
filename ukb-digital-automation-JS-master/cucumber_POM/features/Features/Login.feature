Feature: Perform Login in "British Gas" business application

Background:
    Given the url to perform Login

@Validlogin
  Scenario: User should able to login while provide valid email and password
    When User  navigate to business Login page
    When User  enter the email address and password and clicks on login button
    Then User should navigate to Account overview page
    Then User signed out from the application.

@Invalidlogin
  Scenario: User should able to see error message in login while provide invalid email and password
    When User  navigate to business Login page
    When User  enter the invalidemail address and password and clicks on login button
    Then User will get authentication error "Oops, it looks like something went wrong".

