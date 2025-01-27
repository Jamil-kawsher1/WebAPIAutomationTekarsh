class ContactUsPage {
  constructor(page) {
    this.page = page;
  }

  getNote() {
    return this.page.locator(
      'div:has-text("Note: Below contact form is for testing purpose.")'
    );
  }

  getTitle() {
    return this.page.locator('h2.title.text-center:has-text("Get In Touch")');
  }

  getStatusAlert() {
    return this.page.locator("div.status.alert.alert-success");
  }

  getNameInput() {
    return this.page.locator('input[data-qa="name"]');
  }

  getEmailInput() {
    return this.page.locator('input[data-qa="email"]');
  }

  getSubjectInput() {
    return this.page.locator('input[data-qa="subject"]');
  }

  getMessageTextarea() {
    return this.page.locator('textarea[data-qa="message"]');
  }

  getUploadFileInput() {
    return this.page.locator('input[type="file"][name="upload_file"]');
  }

  getSubmitButton() {
    return this.page.locator('//input[@value="Submit"]');
  }
  getSuccessMessage() {
    return this.page.locator('div.status.alert.alert-success:has-text("Success! Your details have been submitted successfully.")');
  }
}

export default ContactUsPage;
