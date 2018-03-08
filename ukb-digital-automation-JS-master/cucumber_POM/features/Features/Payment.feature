Feature: Make a Payment in "British Gas" business application

Background:
Given the url to perform Login

@LPayment_ManageCards

Scenario: User should navigate to Payment page and make payment with valid card details

    When User navigate to business Login page
    When User enter the email address and password and clicks on login button for "Single-Account" for payment
    And User clicks the Manage Payment Cards
    Then User should verify the Manage Payment Cards page
    Then User should add the payment card details up to sixteen cards
