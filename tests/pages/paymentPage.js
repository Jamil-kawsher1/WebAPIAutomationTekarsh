class PaymentPage {
  constructor(page) {
    this.page = page;
  }

  getNameOnCardInput() {
    return this.page.locator('input[data-qa="name-on-card"]');
  }

  getCardNumberInput() {
    return this.page.locator('input[data-qa="card-number"]');
  }

  getCvcInput() {
    return this.page.locator('input[data-qa="cvc"]');
  }

  getExpiryMonthInput() {
    return this.page.locator('input[data-qa="expiry-month"]');
  }

  getExpiryYearInput() {
    return this.page.locator('input[data-qa="expiry-year"]');
  }

  getPayButton() {
    return this.page.locator('button[data-qa="pay-button"]');
  }

  getSuccessMessage() {
    return this.page.locator('#success_message .alert-success');
  }

  getPaymentHeading() {
    return this.page.locator('h2.heading:has-text("Payment")');
  }
}

export default PaymentPage;