Feature: Perform submit Meter Reading in "British Gas" business application

@ASMRPostCodeInvalid

Scenario: To validate that if the customer is getting proper error message when giving invalid post code

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Invalid_Postcode"
Then user should verify "The postcode you've entered for this account doesn't match our records. It should match the postcode on your bill." error message for "Invalid_Postcode"

@ASMR_Closed_Account_Error_message

Scenario: To validate that if the customer is getting proper error message when give closed account

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Closed_Account"
Then user should verify "We can't accept your meter readings online. Please call us on 0800 316 2010." error message for "Closed_Account"

@ASMR_Collective_Error_message

Scenario: To validate that if the customer is getting proper error message when giving collective account

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Collective_Account"
Then user should verify "We can't accept your meter readings online. Please call us on 0800 316 2010." error message for "Collective_Account"

@ASMR_Child_Account_Error_message

Scenario: To validate that if the customer is getting proper error message when giving Child account

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Child_Account"
Then user should verify "We can't accept your meter readings online. Please call us on 0800 316 2010." error message for "Child_Account"

@ASMR_Error_message_for_More_than_three_meters

Scenario: To validate that if the customer is getting proper error message when giving more than three meters

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "More_Than_Three_Meters"
Then user should verify "We can't accept your meter readings online. Please call us on 0800 316 2010." error message for "More_Than_Three_Meters"

@ASMR_Invalid_post_Code_Client_Side

Scenario: To validate that if the customer is getting proper client side error message when giving in proper error message

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Client_Side"
Then user should verify UI error message with invalid details

@ASMR_Invalid_post_Code_In_progress_account

Scenario: To validate that if the customer is getting proper client side error message when giving in proper error message

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "In-progress_Account"
Then user should verify "We can't accept your meter readings online. Please call us on 0800 316 2010." error message for "In-progress_Account"

@ASMR_Displaying_meter_and_account_details_for_identified_customer

Scenario: To validate that if the customer is displaying with account details for identified customer

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Display_Accounts"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page

@ASMR_Post_meter_read_for_Gas_Single_Register

Scenario: To validate that if the customer is getting meter read details when giving valid details for Single Registers

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "SubmitMeterRead_Gas"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Single Registers
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values

@ASMR_Post_meter_read_for_Electricity_Multiple_Register

Scenario: To validate that if the customer is getting meter read details when giving valid details for Single Registers

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "SubmitMeterRead_Electricity"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Single Registers
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values

@ASMR_Post_meter_read_for_Electricity_Multi_Meter

Scenario: To validate that if the customer is getting meter read details when giving valid details for Multi Register

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "SubmitMeterRead_MultiMeter"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Multi Meters
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values

@ASMR_Post_meter_read_for_implusible_Electricity_Single_Register

Scenario: To validate that if the customer is getting meter read details when giving valid details for Single Registers

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "SubmitMeterRead_Electricity_implusible"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Single Registers
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values

@ASMR_Post_meter_read_for_implusible_Gas_Multi_Meter

Scenario: To validate that if the customer is getting meter read details when giving valid details for Multi Register

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "SubmitMeterRead_Electricity_MultiMeter_Implusible"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Multi Meters
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values

@ASMR_Submit_Reminder_for_Electricity_single_meter

Scenario: To validate that if the customer is able to submit meter reminder form

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Reminder_Electricity"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Single Registers
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values
Then user should submit a meter read reminder

@ASMR_Submit_Reminder_for_Gas_multi_meter

Scenario: To validate that if the customer displayed with no option shown to customer to opt in reminders

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Reminder_Gas_Multi_Meter"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Single Registers
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values
Then user should submit a meter read reminder

@ASMR_verify_already_meter_read_reminder_submitted

Scenario: To validate that if the customer displayed with no option shown to customer to opt in reminders

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Reminder_Already_Submitted"
Then user should verify Account Number, Fuel Type and Meter serial number from meter details page
Then user should submit the meter read for Single Registers
And user should click submit button
And user verify the "Confirmation" page title and Updated meter read values
Then user should able to see the message that customer already opted in for reminders

@ASMR_verify_already_meter_read_submitted

Scenario: To validate that if the customer displayed with submitted message when MR submitted on the day

Given the url to perform ASMR
Given user should navigate to the SMR page
When user should enter the account Number,postcode,email address for "Meter_Read_Submitted_On_The_Day"
Then user should verify submitted message in meter details Section for "Meter_Read_Submitted_On_The_Day"
