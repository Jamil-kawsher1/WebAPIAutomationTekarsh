# Tekarsh Web Automation

This project contains automated tests for the Tekarsh web application using Playwright. It includes separate test suites for **Web** and **API** functionality to ensure reliable end-to-end and backend validations.

---

## **Test Suites**

### **Web Test Suite**

The **Web Test Suite** contains tests to validate critical user flows on the Tekarsh web application.

#### **Spec Files and Sequence**

For the best results, run the following spec files in the specified order:

1. `tests/testRunner/signup.spec.js`
2. `tests/testRunner/eComAction.spec.js`
3. `tests/testRunner/contactUs.spec.js`

#### **Run the Entire Web Test Suite**

To execute all the web tests in the suite, use the following command:

```sh
npx playwright test --project=web --browser=chromium --headed
```

### Run Individual Web Spec Files

```sh
npx playwright test tests/testRunner/<spec-file>.spec.js --browser=chromium --headed
```

## API Test Suite

The **API Test Suite** focuses on testing API endpoints for validation and functionality.

---

### **Spec Files**

- `tests/testRunner/apiValidation.spec.js`

---

### **Run the Entire API Test Suite**

To execute all the API tests in the suite, run the following command:

```sh
npx playwright test --project=api

```
