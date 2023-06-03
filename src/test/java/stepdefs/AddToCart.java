package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCart {

	WebDriver driver = Hooks.driver;
	
	@When("I click on Product name as {string}")
	public void i_click_on_Product_name_as(String string) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement product = driver.findElement(By.xpath("//div[normalize-space()='Sauce Labs Backpack']"));
		product.click();
	}

	@When("I click on the Add to cart Button")
	public void i_click_on_the_Add_to_cart_Button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement loginBtn = driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']"));
		loginBtn.click();
	}
	
	@When("I click on the Shopping cart Link")
	public void i_click_on_the_Shopping_cart_Link() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement cartBtn = driver.findElement(By.xpath("//a[@class='shopping_cart_link']"));
		cartBtn.click();
	}

	@Then("I verify the item on the cart page")
	public void i_verify_the_item_on_the_cart_page() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement text = driver.findElement(By.xpath("//div[@class='inventory_item_name']"));
		String actualText = text.getText();
		String expectedText = "Sauce Labs Backpack";
		Assert.assertEquals(actualText, expectedText);
		System.out.println("Cart has item");}
	
	
}
