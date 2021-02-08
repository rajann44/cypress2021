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
// Commit on 2021-01-17 16:00:00: 28036
// Commit on 2021-01-19 11:11:00: 2787
// Commit on 2021-01-20 10:27:00: 5914
// Commit on 2021-01-25 16:28:00: 15259
// Commit on 2021-01-26 16:17:00: 4885
// Commit on 2021-01-29 14:49:00: 29196
// Commit on 2021-01-30 18:55:00: 25128
// Commit on 2021-01-31 15:27:00: 22485
// Commit on 2021-02-01 10:00:00: 26066
// Commit on 2021-02-03 14:39:00: 7181
// Commit on 2021-02-04 18:43:00: 14067
// Commit on 2021-02-06 11:36:00: 24671
// Commit on 2021-02-08 17:26:00: 12058
