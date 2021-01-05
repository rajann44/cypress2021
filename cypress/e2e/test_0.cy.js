describe('Product Search Tests', () => {
    beforeEach(() => {
        cy.visit('/products');
    });

    it('should search for products', () => {
        cy.get('#search_product').type('Blue Top');
        cy.get('#submit_search').click();
        cy.get('.features_items').should('contain', 'Blue Top');
    });
});
