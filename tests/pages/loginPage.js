class LoginPage {
  constructor(page) {
    this.page = page;
  }

  getLoginTitle() {
    return this.page.locator('h2:has-text("Login to your account")');
  }

  getEmailInput() {
    return this.page.locator('input[data-qa="login-email"]');
  }

  getPasswordInput() {
    return this.page.locator('input[data-qa="login-password"]');
  }

  getLoginButton() {
    return this.page.locator('button[data-qa="login-button"]');
  }

  async login(email, password) {
    await this.getEmailInput().fill(email);
    await this.getPasswordInput().fill(password);
    await this.getLoginButton().click();
  }
}

export default LoginPage;
