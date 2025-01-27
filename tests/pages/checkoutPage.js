class CheckoutPage {
    constructor(page) {
      this.page = page;
    }
  
    getCheckoutBreadcrumb() {
      return this.page.locator('div.breadcrumbs ol.breadcrumb li.active:has-text("Checkout")');
    }
  
    getPlaceOrderButton() {
      return this.page.locator('a.btn.btn-default.check_out:has-text("Place Order")');
    }


    getOrderPlacedTitle() {
        return this.page.locator('h2.title.text-center[data-qa="order-placed"]:has-text("Order Placed!")');
      }
    
      getOrderConfirmationMessage() {
        return this.page.locator('p:has-text("Congratulations! Your order has been confirmed!")');
      }
    
  }
  
  export default CheckoutPage;