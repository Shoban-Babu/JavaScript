Feature: Perform submit Meter Reading in "British Gas" business application

Background:
Given the url to perform Login

@LSMR_Inprogress_Account

Scenario: To verify user can able to get the status of account page when user account is in progress

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "In-Progress-Account"
Then User should navigate to "Status of contract" account page for In-progress Account
Then User should click on logout button

@LSMR_Closed_Account

Scenario: To verify user can able to get the information message page when user Closed account

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Closed-Account"
Then User should verify the "Submit meter link not visible" error message for "Closed-Account"
Then User should click on logout button

@LSMR_Error_More_Than_Three_Meters

Scenario: To verify user can able to get the error message when more that three meters

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "More_Than_Three_Meters"
When User navigate to submit meter read page
Then User should verify the "Oops, it looks like something went wrong. Please try again later." error message for "More_Than_Three_Meters"
Then User should click on logout button

@LSMR_Error_Complex_meter

Scenario: To verify user can able to get the error message when more that three meters

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Complex_Meter"
Then User should verify the "You don't need to submit a meter reading online" error message for "Complex_Meter"
Then User should click on logout button

@LSMR_Error_MoreThan_ThreeMeters_Collective

Scenario: To verify user can able to get the error message when more that three meters for Collective

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "More_Than_Three_Meters_Collective"
When User navigate to submit meter read page
And User should select the "Site Postcode" and search item as "B15 1DL"
Then User should verify the "Oops, it looks like something went wrong. Please try again later." error message for "More_Than_Three_Meters_Collective"
Then User should click on logout button

@LSMR_Single_Gas_SingleRegister

Scenario: User should able to submit Meter Reading while provide valid email and account details

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Gas"
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Single_Electricity_Multiple_Register

Scenario: User should able to submit Meter Reading while provide valid email and account details

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Electricity"
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Single_Elec_Multi_Meter

Scenario: User should able to submit Meter Reading while provide valid email and account details

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Multi_Meter"
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading for multi meter
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Collective_Gas_MPRN

Scenario: To verify whether user can able to submit the meter read using collective account with MPRN

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Gas_Collective_MPAN"
When User navigate to submit meter read page
And User should select the "MPRN" and search item as "1533301608"
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Collective_Gas_PostCode

Scenario: To verify whether user can able to submit the meter read using collective account with PostCode number

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Gas_Collective_Postcode"
When User navigate to submit meter read page
And User should select the "Site Postcode" and search item as "OL11 2SL"
When User get meter reading count, select past date and enter new meter Reading for multi meter
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Collective_Electricity_MPAN

Scenario: To verify whether user can able to submit the meter read using collective account with PostCode number

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Electricity_Collective_MPAN"
When User navigate to submit meter read page
And User should select the "MPAN" and search item as "000000001200021510736"
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Collective_Electricity_PostCode

Scenario: To verify whether user can able to submit the meter read using collective account with PostCode number

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Electricity_Collective_PostCode"
When User navigate to submit meter read page
And User should select the "Site Postcode" and search item as "EC2A 3HR"
When User get meter reading count, select past date and enter new meter Reading for multi meter
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Single_Account_Gas_ODB

Scenario: To verify whether user can able to get the On Demand Billing Confirmation Page

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Gas_ODB"
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
And User Should verify On Demand Billing "Confirmation Page"
Then User should click on logout button

@LSMR_Single_Account_Electricity_Multi_Meter_ODB

Scenario: To verify whether user can able to get the On Demand Billing Confirmation Page

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Single_Account_Electricity_MultiMeter_ODB"
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading for multi meter
When User click submit Button
Then User should navigate to confirmation page
And User Should verify On Demand Billing "Confirmation Page"
Then User should click on logout button

@LSMR_Multiple_Electricity_Multi_register

Scenario: User should able to submit Meter Reading while provide valid email and account details from multiple accounts

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Multiple_Electricity_Multi_register"
And User should select the account number from Multiple account Dash Board Section
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Multiple_Gas_Multi_register

Scenario: User should able to submit Meter Reading while provide valid email and account details from multiple accounts

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Multiple_Gas_Single_register"
And User should select the account number from Multiple account Dash Board Section
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button

@LSMR_Multiple_Electricity_Multi_Meter

Scenario: User should able to submit Meter Reading while provide valid email and account details from multiple accounts

When User navigate to business Login page
When User enter the email address and password and clicks on login button for "Multiple_Electricity_Multi_Meter"
And User should select the account number from Multiple account Dash Board Section
When User navigate to submit meter read page
When User get meter reading count, select past date and enter new meter Reading for multi meter
When User click submit Button
Then User should navigate to confirmation page
Then User should click on logout button
