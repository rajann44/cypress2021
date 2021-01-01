// Custom command for product search
Cypress.Commands.add('searchProduct', (productName) => {
    cy.get('#search_product').type(productName);
    cy.get('#submit_search').click();
});

// Custom command for cart verification
Cypress.Commands.add('verifyCart', (productName) => {
    cy.get('#cart_info_table').should('contain', productName);
});
