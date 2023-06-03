$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/AddToCart.feature");
formatter.feature({
  "name": "This feature will be used to test the Add to Cart funcionality of Swag Labs",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_has_launched_the_Swag_Labs_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enter_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_should_be_landed_on_the_Products_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add the product to Cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on Product name as \"Sauce Labs Backpack\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddToCart.i_click_on_Product_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Add to cart Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCart.i_click_on_the_Add_to_cart_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Shopping cart Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddToCart.i_click_on_the_Shopping_cart_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the item on the cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddToCart.i_verify_the_item_on_the_cart_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenarios",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_has_launched_the_Swag_Labs_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enter_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_should_be_landed_on_the_Products_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify the error message when we give the incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should be Getting the \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user",
        "12345",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify the error message when we give the incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_has_launched_the_Swag_Labs_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enter_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be Getting the \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the error message when we give the incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the Swag Labs Application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_has_launched_the_Swag_Labs_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username \"locked_out_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enter_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_enters_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should be Getting the \"Epic sadface: Sorry, this user has been locked out.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});