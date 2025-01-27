import { test, expect } from "@playwright/test";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import LoginPage from "../pages/loginPage";
import CategoryPage from "../pages/categoryPage";
import ViewAndUpdatePage from "../pages/viewAndUpdatePage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import PaymentPage from "../pages/paymentPage";
dotenv.config();

const baseUrl = process.env.baseUrl;

test.describe("E-Commerce Actions", () => {
  let accountData;
  let loginPage;
  let categoryPage;
  let viewAndUpdatePage;
  let cartPage;
  let checkoutPage;
  let paymentPage;
  test.beforeAll(() => {
    const dataPath = path.resolve(__dirname, "../Data/accountData.json");
    accountData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    categoryPage = new CategoryPage(page);
    viewAndUpdatePage = new ViewAndUpdatePage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    paymentPage = new PaymentPage(page);
    await page.goto(baseUrl);
    console.log("Debug:: Navigated to base URL");

    // Login with the saved account data
    await loginPage.login(accountData.email, accountData.password);
    console.log("Debug:: Logged in with saved account data");
  });

  test("should select Men category, select Jeans, and view and update quantity of a product", async ({
    page,
  }) => {
    await test.step("Select Men category and Jeans", async () => {
      // Navigate to the Men category
      await categoryPage.getMenCategory().click();
      console.log("Debug:: Men category is selected");

      // Select Jeans
      await categoryPage.getMenJeans().click();
      console.log("Debug:: Jeans is selected");

      // Add assertions to verify the product page is loaded
      await expect(page).toHaveURL(/.*category_products\/6/);
      console.log("Debug:: Verified Jeans product page URL");
    });

    await test.step("View and update quantity of a product", async () => {
      // Select a random "View Product" link
      await viewAndUpdatePage.selectRandomViewProduct();
      console.log("Debug:: Random View Product is selected");

      // Add assertions to verify the product details page is loaded
      await expect(page).toHaveURL(/.*product_details\/\d+/);
      console.log("Debug:: Verified product details page URL");

      // Update the quantity (assuming there's a quantity input and update button)
      await page.fill('input[name="quantity"]', "2");
      console.log("Debug:: Quantity updated to 2");

      // Add assertions to verify the quantity is updated
      await expect(page.locator('input[name="quantity"]')).toHaveValue("2");
      console.log("Debug:: Verified quantity is updated to 2");

      await viewAndUpdatePage.getAddToCartButton().click();
      console.log("Debug:: Add to Cart button clicked");

      // Add assertions to verify the product is added to cart
      await expect(viewAndUpdatePage.getAddedToCartModal()).toBeVisible();
      console.log("Debug:: Verified product is added to cart");
      await page.waitForTimeout(4000);
    });
  });

  test("Proceed to Checkout", async ({ page }) => {
    await test.step("Go to the cart and click Proceed to Checkout.", async () => {
      await cartPage.getCartLink().click();
      console.log("Debug:: Clicked on Cart link");

      // Wait for the cart page to load
      await expect(page).toHaveURL(/.*view_cart/);
      console.log("Debug:: Verified cart page URL");

      //Check if the cart proceed to checkout button is visible
      // await expect(cartPage.getProceedToCheckoutButton()).toBeVisible();

      await page.waitForTimeout(3000);
      // Click on Proceed to Checkout button
      await cartPage.getProceedToCheckoutButton().click();
      console.log("Debug:: Clicked on Proceed to Checkout button");
      //assert that breadcrumb is displayed
      await expect(page.locator("ol.breadcrumb")).toBeVisible();
      console.log("Debug:: Breadcrumb is displayed");

      await page.waitForTimeout(3000);
      //Click on Place Order button
      await checkoutPage.getPlaceOrderButton().click();
      console.log("Debug:: Clicked on Place Order button");
    });
    await test.step("Add Dummy Payment Details and Place Order", async () => {
      // Add assertion to verify that it's on the Payment page
      await expect(paymentPage.getPaymentHeading()).toBeVisible();
      console.log("Debug:: Verified on Payment page");

      // Add dummy payment details using Stripe test card
      await paymentPage.getNameOnCardInput().fill("John Doe");
      await paymentPage.getCardNumberInput().fill("4242424242424242");
      await paymentPage.getCvcInput().fill("123");
      await paymentPage.getExpiryMonthInput().fill("12");
      await paymentPage.getExpiryYearInput().fill("2023");
      console.log("Debug:: Added dummy payment details");

      // Click on Pay button
      await paymentPage.getPayButton().click();
      console.log("Debug:: Clicked on Pay button");

      // Add assertions to verify the success message is displayed
      await expect(checkoutPage.getOrderConfirmationMessage()).toBeVisible();
      console.log("Debug:: Verified success message is displayed");
    });
  });
});
