class CartPage {
    elements = {
        cartTable: '#cart_info_table',
        checkoutBtn: '.check_out',
        emptyCartBtn: '.cart_quantity_delete'
    }

    verifyProductInCart(productName) {
        cy.get(this.elements.cartTable).should('contain', productName);
    }

    proceedToCheckout() {
        cy.get(this.elements.checkoutBtn).click();
    }
}

export default new CartPage();
// Commit on 2021-01-03 16:50:00: 9371
