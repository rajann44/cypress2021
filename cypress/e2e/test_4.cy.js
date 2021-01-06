describe('Contact Form Tests', () => {
    it('should submit contact form', () => {
        cy.visit('/contact_us');
        cy.get('[data-qa="name"]').type('Test User');
        cy.get('[data-qa="email"]').type('test@example.com');
        cy.get('[data-qa="subject"]').type('Test Subject');
        cy.get('[data-qa="message"]').type('Test Message');
        cy.get('[data-qa="submit-button"]').click();
        cy.get('.alert-success').should('be.visible');
    });
});
