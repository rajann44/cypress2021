class ProductPage {
    elements = {
        searchInput: '#search_product',
        searchButton: '#submit_search',
        productList: '.features_items',
        addToCartBtn: '.add-to-cart'
    }

    searchProduct(productName) {
        cy.get(this.elements.searchInput).type(productName);
        cy.get(this.elements.searchButton).click();
    }

    addToCart(productName) {
        cy.contains(productName).parent().parent().find(this.elements.addToCartBtn).click();
    }
}

export default new ProductPage();
