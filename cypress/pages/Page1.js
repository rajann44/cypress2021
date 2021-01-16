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
// Commit on 2021-01-07 12:04:00: 30916
// Commit on 2021-01-08 09:11:00: 25580
// Commit on 2021-01-09 17:25:00: 5885
// Commit on 2021-01-12 18:47:00: 2558
// Commit on 2021-01-13 17:04:00: 15610
// Commit on 2021-01-14 17:23:00: 27769
// Commit on 2021-01-16 10:05:00: 14072
