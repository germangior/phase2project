package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginStepsDef {

	WebDriver driver = Hooks.driver;
	
	@Given("User has launched the Swag Labs Application")
	public void user_has_launched_the_Swag_Labs_Application() {
	    
		driver.get("https://www.saucedemo.com/");
		//Thread.sleep(3000);
	}


	@When("User enter username {string}")
	public void user_enter_username(String UserNameVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement userName = driver.findElement(By.id("user-name"));
		userName.sendKeys(UserNameVal);
	}

	@When("User enters password {string}")
	public void user_enters_password(String PassVal) {
	    // Write code here that turns the phrase above into concrete actions
		WebElement password = driver.findElement(By.id("password"));
		password.sendKeys(PassVal);
	}

	@When("User clicks on Login button")
	public void user_clicks_on_Login_button() {
	    // Write code here that turns the phrase above into concrete actions
		WebElement loginBtn = driver.findElement(By.name("login-button"));
		loginBtn.click();
	}

	@Then("User should be landed on the Products Page")
	public void user_should_be_landed_on_the_Products_Page() {
	    // Write code here that turns the phrase above into concrete actions
		String homepageTitle = driver.getTitle();
		String expectedTitle = "Swag Labs";
		Assert.assertEquals(homepageTitle, expectedTitle);
	   System.out.println("Login Successful");
	}
	@Then("User Should be Getting the {string}")
	public void i_should_get_the_error_message_as(String expectedError) throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
		WebElement error = driver.findElement(By.xpath("//h3[@data-test='error']"));
		Thread.sleep(1000);
		String actualError = error.getText();
		Thread.sleep(1000);
		Assert.assertEquals(actualError, expectedError);  
	}
	
}
