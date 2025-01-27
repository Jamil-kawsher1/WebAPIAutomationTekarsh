class ViewAndUpdatePage {
  constructor(page) {
    this.page = page;
  }

  getMenJeansProductsTitle() {
    return this.page.locator('h2.title.text-center:has-text("Men - Jeans Products")');
  }

  getAllViewProductLinks() {
    return this.page.locator('a:has-text("View Product")');
  }

  async selectRandomViewProduct() {
    const viewProductLinks = await this.getAllViewProductLinks().elementHandles();
    const randomIndex = Math.floor(Math.random() * viewProductLinks.length);
    await viewProductLinks[randomIndex].click();
  }

  getAddToCartButton() {
    return this.page.locator('button.btn.btn-default.cart:has-text("Add to cart")');
  }


  getAddedToCartModal() {
    return this.page.locator('div.modal-content:has-text("Added!")');
  }

  getAddedToCartMessage() {
    return this.page.locator('div.modal-content p.text-center:has-text("Your product has been added to cart.")');
  }
}

export default ViewAndUpdatePage;