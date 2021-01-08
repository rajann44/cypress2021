describe('Cart Tests', () => {
    beforeEach(() => {
        cy.visit('/products');
    });

    it('should add product to cart', () => {
        cy.addToCart('Blue Top');
        cy.get('.modal-content').should('be.visible');
        cy.get('.btn-success').click();
    });
});
