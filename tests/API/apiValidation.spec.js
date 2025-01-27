import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";
let accountData;
test.beforeAll(() => {
  const dataPath = path.resolve(__dirname, "../Data/accountData.json");
  accountData = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
});
test("Validate Brand List", async ({ request }) => {
  const response = await request.get(
    "https://automationexercise.com/api/brandsList"
  );
  expect(response.status()).toBe(200);
  console.log(await response.text());
  const responseBody = await response.json();

  // Check that the response contains specific brands

  const brands = responseBody.brands.map((brand) => brand.brand);
  expect(brands).toContain("Polo");
  expect(brands).toContain("Babyhug");
  expect(brands).toContain("Biba");

  // Check that the response does not contain certain brands
  expect(brands).not.toContain("Heineken");
  expect(brands).not.toContain("BMW");
  expect(brands).not.toContain("Razor");
});

test("Verify User Login", async ({ request }) => {
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    {
      form: {
        email: accountData.email,
        password: accountData.password,
      },
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // Verify the response message
  expect(responseBody.message).toBe("User exists!");
});
