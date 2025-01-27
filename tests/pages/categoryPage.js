class CategoryPage {
  constructor(page) {
    this.page = page;
  }

  getCategoryTitle() {
    return this.page.locator('h2:has-text("Category")');
  }

  getWomenCategory() {
    return this.page.locator('a[href="#Women"]');
  }

  getWomenDress() {
    return this.page.locator('a[href="/category_products/1"]');
  }

  getWomenTops() {
    return this.page.locator('a[href="/category_products/2"]');
  }

  getWomenSaree() {
    return this.page.locator('a[href="/category_products/7"]');
  }

  getMenCategory() {
    return this.page.locator('a[href="#Men"]');
  }

  getMenTshirts() {
    return this.page.locator('a[href="/category_products/3"]');
  }

  getMenJeans() {
    return this.page.locator('a[href="/category_products/6"]');
  }

  getKidsCategory() {
    return this.page.locator('a[href="#Kids"]');
  }

  getKidsDress() {
    return this.page.locator('a[href="/category_products/4"]');
  }

  getKidsTopsAndShirts() {
    return this.page.locator('a[href="/category_products/5"]');
  }
}

export default CategoryPage;
