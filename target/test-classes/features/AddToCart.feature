
Feature: This feature will be used to test the Add to Cart funcionality of Swag Labs
  I want to use this template for my feature file
	
  Background: 
    Given User has launched the Swag Labs Application
    When User enter username "standard_user"
    And User enters password "secret_sauce"
    And User clicks on Login button
    Then User should be landed on the Products Page

  @Sanity
  Scenario: Add the product to Cart
    When I click on Product name as "Sauce Labs Backpack"
    And I click on the Add to cart Button
    And I click on the Shopping cart Link
    Then I verify the item on the cart page