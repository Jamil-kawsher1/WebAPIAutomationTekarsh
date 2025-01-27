class CartPage {
    constructor(page) {
      this.page = page;
    }
  
    getCartLink() {
      return this.page.locator('li a[href="/view_cart"]:has-text("Cart")');
    }

    getProceedToCheckoutButton() {
        return this.page.locator('a.btn.btn-default.check_out:has-text("Proceed To Checkout")');
      }
  }
  
  export default CartPage;