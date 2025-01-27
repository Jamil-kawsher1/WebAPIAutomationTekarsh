class SignupPage {
  constructor(page) {
    this.page = page;
  }

  getNewUserSignUpTitle() {
    return this.page.locator('h2:has-text("New User Signup!")');
  }

  getNameInput() {
    return this.page.locator('input[data-qa="signup-name"]');
  }

  getEmailInput() {
    return this.page.locator('input[data-qa="signup-email"]');
  }

  getSignupButton() {
    return this.page.locator('button[data-qa="signup-button"]');
  }

  getTitleMrRadio() {
    return this.page.locator('input[id="id_gender1"]');
  }

  getTitleMrsRadio() {
    return this.page.locator('input[id="id_gender2"]');
  }

  async selectRandomTitle() {
    const titles = [this.getTitleMrRadio(), this.getTitleMrsRadio()];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    await randomTitle.check();
  }

  getEmailInputDisabled() {
    return this.page.locator('input[data-qa="email"]');
  }

  getPasswordInput() {
    return this.page.locator('input[data-qa="password"]');
  }

  getDaysSelect() {
    return this.page.locator('select[data-qa="days"]');
  }

  getMonthsSelect() {
    return this.page.locator('select[data-qa="months"]');
  }

  getYearsSelect() {
    return this.page.locator('select[data-qa="years"]');
  }

  getNewsletterCheckbox() {
    return this.page.locator('input[id="newsletter"]');
  }

  getOptinCheckbox() {
    return this.page.locator('input[id="optin"]');
  }

  getAddressInformationText() {
    return this.page.locator('h2:has-text("Address Information")');
  }

  getFirstNameInput() {
    return this.page.locator('input[data-qa="first_name"]');
  }

  getLastNameInput() {
    return this.page.locator('input[data-qa="last_name"]');
  }

  getAddress1Input() {
    return this.page.locator('input[data-qa="address"]');
  }

  getAddress2Input() {
    return this.page.locator('input[data-qa="address2"]');
  }

  getCountrySelect() {
    return this.page.locator('select[data-qa="country"]');
  }

  getStateInput() {
    return this.page.locator('input[data-qa="state"]');
  }

  getCityInput() {
    return this.page.locator('input[data-qa="city"]');
  }

  getZipcodeInput() {
    return this.page.locator('input[data-qa="zipcode"]');
  }

  getMobileNumberInput() {
    return this.page.locator('input[data-qa="mobile_number"]');
  }

  getCreateAccountButton() {
    return this.page.locator('button[data-qa="create-account"]');
  }

  getAccountCreatedTitle() {
    return this.page.locator('h2[data-qa="account-created"]');
  }

  getCongratulationsMessage() {
    return this.page.locator('p:has-text("Congratulations! Your new account has been successfully created!")');
  }

  getContinueButton() {
    return this.page.locator('a[data-qa="continue-button"]');
  }
}

export default SignupPage;
