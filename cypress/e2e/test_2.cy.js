describe('User Registration Tests', () => {
    it('should register new user', () => {
        const email = 'test' + Date.now() + '@example.com';
        cy.register('Test User', email, 'password123');
        cy.get('.alert-success').should('be.visible');
    });
});
