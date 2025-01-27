import { test, expect } from "@playwright/test";
import ContactUsPage from "../pages/contactUsPage";
import path from "path";

test.describe("Contact Us Page", () => {
  let contactUsPage;

  test.beforeEach(async ({ page }) => {
    contactUsPage = new ContactUsPage(page);
    await page.goto("https://automationexercise.com/contact_us");
  });

  test("should submit the contact form successfully", async ({ page }) => {
    const filePath = path.resolve(__dirname, "../Data/file/contactus.jpg");
    await expect(contactUsPage.getTitle()).toHaveText("Get In Touch");
    console.log("Debug:: Verified the title of the contact us page");
    await contactUsPage.getNameInput().fill("John Doe");
    console.log("Debug:: Name Input is filled");
    await contactUsPage.getEmailInput().fill("jon@test.com");
    console.log("Debug:: Email Input is filled");
    await contactUsPage.getSubjectInput().fill("Test Subject");
    console.log("Debug:: Subject Input is filled");
    await contactUsPage.getMessageTextarea().fill("This is a test message.");
    console.log("Debug:: Message Textarea is filled");
    await contactUsPage.getUploadFileInput().setInputFiles(filePath);
    console.log("Debug:: File is uploaded");
    //wait before submit button is clickable
    await page.waitForTimeout(1000);

    page.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });

    await contactUsPage.getSubmitButton().click();
    console.log("Debug:: Submit Button is clicked");
    //assert this message directly to confirm file submission message is Success! Your details have been submitted successfully.
    await expect(contactUsPage.getSuccessMessage()).toContainText(
      "Success! Your details have been submitted successfully."
    );
    await page.waitForTimeout(5000);

    // await contactUsPage.fillContactForm(
    //       "John Doe",
    //       "john.doe@example.com",
    //       "This is a test message.",
    //       filePath
    //     );
    //     await contactUsPage.submitForm();
    //     const successMessage = await contactUsPage.getSuccessMessage();
    //     expect(successMessage).toBe("Your message has been sent successfully.");
  });
});
