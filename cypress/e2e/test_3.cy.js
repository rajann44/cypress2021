describe('API Tests', () => {
    it('should verify API endpoints', () => {
        cy.request('GET', '/api/productsList').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('products');
        });
    });
});
