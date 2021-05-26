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
// Commit on 2021-02-08 09:19:00: 18187
// Commit on 2021-02-09 12:59:00: 230
// Commit on 2021-02-12 15:54:00: 20138
// Commit on 2021-02-14 18:32:00: 31563
// Commit on 2021-02-15 17:11:00: 6477
// Commit on 2021-02-16 14:12:00: 18310
// Commit on 2021-02-20 18:40:00: 939
// Commit on 2021-02-21 13:00:00: 30023
// Commit on 2021-02-23 16:45:00: 419
// Commit on 2021-02-26 17:53:00: 5625
// Commit on 2021-02-28 14:52:00: 26499
// Commit on 2021-03-02 14:53:00: 24029
// Commit on 2021-03-05 09:39:00: 22047
// Commit on 2021-03-09 17:01:00: 21354
// Commit on 2021-03-12 09:32:00: 1649
// Commit on 2021-03-13 09:42:00: 27874
// Commit on 2021-03-14 12:49:00: 32651
// Commit on 2021-03-18 17:41:00: 20338
// Commit on 2021-03-19 18:12:00: 32247
// Commit on 2021-03-21 16:53:00: 14088
// Commit on 2021-03-22 18:53:00: 7115
// Commit on 2021-03-23 16:26:00: 4683
// Commit on 2021-03-26 13:47:00: 8688
// Commit on 2021-03-27 15:45:00: 23669
// Commit on 2021-03-29 11:57:00: 6002
// Commit on 2021-03-30 17:15:00: 2483
// Commit on 2021-03-31 18:19:00: 10995
// Commit on 2021-04-04 13:29:00: 13094
// Commit on 2021-04-09 16:48:00: 8712
// Commit on 2021-04-10 14:24:00: 13899
// Commit on 2021-04-11 14:57:00: 15017
// Commit on 2021-04-13 18:37:00: 8496
// Commit on 2021-04-15 09:29:00: 9722
// Commit on 2021-04-17 12:32:00: 20469
// Commit on 2021-04-19 18:55:00: 2754
// Commit on 2021-04-22 17:44:00: 30777
// Commit on 2021-04-23 11:50:00: 6826
// Commit on 2021-04-25 18:39:00: 1193
// Commit on 2021-04-26 12:27:00: 8985
// Commit on 2021-04-29 14:10:00: 14944
// Commit on 2021-04-29 15:07:00: 22753
// Commit on 2021-05-01 09:26:00: 28008
// Commit on 2021-05-04 18:54:00: 1331
// Commit on 2021-05-09 18:04:00: 15077
// Commit on 2021-05-09 15:52:00: 25445
// Commit on 2021-05-13 18:52:00: 25055
// Commit on 2021-05-15 10:17:00: 14073
// Commit on 2021-05-22 11:05:00: 14542
// Commit on 2021-05-23 15:56:00: 29833
// Commit on 2021-05-24 17:44:00: 31734
// Commit on 2021-05-25 17:08:00: 3218
// Commit on 2021-05-26 17:06:00: 5548
