Feature: Perform submit Meter Reading in "British Gas" business application

  Scenario: User should able to register while provide valid email and account details
    Given the url to perform Login
    When User  navigate to business Registration page
    When User  enter the email address and password and clicks on login button
    When User navigate to submit meter read page
    When User get meter reading count, select past date and enter new meter Reading
    When User click submit Button
    Then User should navigate to confirmation page.
