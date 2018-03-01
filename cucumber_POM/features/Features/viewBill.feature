Feature: View Bills in British gas for an online customer

  Scenario: User should navigate to view bills page
    Given the url to perform Login
    When User  navigate to business Login page
    When User  enter the email address and password and clicks on login button
    When User clicks on billing link
    When User clicks on Search in bills
    When User clicks on previous option
    Then User bills should be displayed
