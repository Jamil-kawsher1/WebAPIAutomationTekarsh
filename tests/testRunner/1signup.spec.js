import { test, expect } from "@playwright/test";
import SignupPage from "../pages/signupPage";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import fs from "fs";
import LoginPage from "../pages/loginPage";
import accountData from "../Data/accountData.json";
dotenv.config();

const baseUrl = process.env.baseUrl;

test.describe("Signup Page Tests", () => {
  let signupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);
    await page.goto(baseUrl);
    console.log("Debug:: Navigated to base URL");
  });

  test("should display new user signup title", async ({ page }) => {
    await expect(signupPage.getNewUserSignUpTitle()).toContainText(
      "New User Signup!"
    );
    console.log("Debug:: Verified new user signup title");
  });

  test("should fill out the signup form and submit", async ({ page }) => {
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await signupPage.getNameInput().fill(name);
    console.log("Debug:: Name Input is filled");

    await signupPage.getEmailInput().fill(email);
    console.log("Debug:: Email Input is filled");

    await signupPage.getSignupButton().click();
    console.log("Debug:: Signup Button is clicked");

    await signupPage.selectRandomTitle();
    console.log("Debug:: Random Title is selected");

    // Check that the email input field has a value and is disabled
    const emailInput = signupPage.getEmailInputDisabled();
    await expect(emailInput).toHaveValue(email);
    console.log("Debug:: Email Input has the correct value");
    await expect(emailInput).toBeDisabled();
    console.log("Debug:: Email Input is disabled");

    // Password
    await signupPage.getPasswordInput().fill(password);
    console.log("Debug:: Password Input is filled");

    // Date of Birth
    const randomDate = faker.date.past();
    const day = randomDate.getDate().toString();
    const month = (randomDate.getMonth() + 1).toString(); // Months are 0-based
    const year = (randomDate.getFullYear() - 3).toString();
    console.log("Debug:: value Of Dates are", day, month, year);

    await signupPage.getDaysSelect().selectOption(day);
    console.log("Debug:: Day is selected");

    await signupPage.getMonthsSelect().selectOption(month);
    console.log("Debug:: Month is selected");

    await signupPage.getYearsSelect().selectOption(year);
    console.log("Debug:: Year is selected");

    // Check the newsletter and option checkboxes
    await signupPage.getNewsletterCheckbox().check();
    console.log("Debug:: Newsletter Checkbox is checked");
    await signupPage.getOptinCheckbox().check();
    console.log("Debug:: Optin Checkbox is checked");

    // Check for Address Information text is here or not
    await expect(signupPage.getAddressInformationText()).toContainText(
      "Address Information"
    );
    console.log("Debug:: Address Information Text is present");

    // First Name
    await signupPage.getFirstNameInput().fill(faker.person.firstName());
    console.log("Debug:: First Name is filled");
    // Last Name
    await signupPage.getLastNameInput().fill(faker.person.lastName());
    console.log("Debug:: Last Name is filled");
    // Address
    await signupPage.getAddress1Input().fill(faker.location.streetAddress());
    console.log("Debug:: Address1 is filled");
    // Address2
    await signupPage.getAddress2Input().fill(faker.location.street());
    console.log("Debug:: Address2 is filled");
    // Country
    await signupPage.getCountrySelect().selectOption("United States");
    console.log("Debug:: Country is selected");
    // State
    await signupPage.getStateInput().fill(faker.address.state());
    console.log("Debug:: State is filled");
    // City
    await signupPage.getCityInput().fill(faker.address.city());
    console.log("Debug:: City is filled");
    // Zipcode
    await signupPage.getZipcodeInput().fill(faker.address.zipCode());
    console.log("Debug:: Zipcode is filled");
    // Mobile Number
    await signupPage.getMobileNumberInput().fill(faker.phone.number());
    console.log("Debug:: Mobile Number is filled");
    // Create Account Button
    await signupPage.getCreateAccountButton().click();
    console.log("Debug:: Create Account Button is clicked");

    //Account Creation Success
    await expect(signupPage.getCongratulationsMessage()).toContainText(
      "Congratulations! Your new account has been successfully created!"
    );
    console.log("Debug:: Congratulations Message is displayed");

    // Save email and password to a JSON file
    const accountData = { email, password };
    fs.writeFileSync(
      "tests\\Data\\accountData.json",
      JSON.stringify(accountData, null, 2)
    );
    console.log("Debug:: Account data saved to accountData.json");
  });
});
