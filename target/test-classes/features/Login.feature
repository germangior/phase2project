
Feature: Login Feature Scenarios
  I want to use this template for my feature file
	@Sanity
  Scenario: Verify Login Functionality with correct username and password
    Given User has launched the Swag Labs Application
    When User enter username "standard_user"
    And User enters password "secret_sauce"
    And User clicks on Login button
    Then User should be landed on the Products Page
	@Sanity
  Scenario Outline: Verify the error message when we give the incorrect username and password
    Given User has launched the Swag Labs Application
    When User enter username "<UserName>"
    And User enters password "<Password>"
    And User clicks on Login button
    Then User Should be Getting the "<Error>"

    Examples: 
      | UserName        | Password     | Error                                                                     |
      | standard_user   |        12345 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                        |
