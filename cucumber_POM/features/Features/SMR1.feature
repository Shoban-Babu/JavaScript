Feature: Perform submit Meter Reading in "British Gas" business application

  Scenario Outline: As a user i want to submit the meter reading by navigating to my account with valid credentials.
    Given the "<url>" to perform Login
    When I login using username as "<Email>" and password as "<Password>"
    And I navigate to "<MyAccount>"" and click submit meter read link
    And  I select "<Date>" and enter new "<MeterReading>"
    And  I click submit Button
    Then User should navigate to confirmation page  and verify message "<message>"

    Examples:
      | url | Email | Password | MyAccount | Date | MeterReading | message |
