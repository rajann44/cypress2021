// Custom command for checkout process
Cypress.Commands.add('checkout', () => {
    cy.get('.check_out').click();
    cy.get('#address_delivery').should('be.visible');
    cy.get('#address_invoice').should('be.visible');
});
