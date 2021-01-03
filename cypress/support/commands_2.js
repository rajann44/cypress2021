// Custom command for API testing
Cypress.Commands.add('apiRequest', (method, endpoint, body = null) => {
    const options = {
        method: method,
        url: endpoint,
        failOnStatusCode: false
    };
    if (body) {
        options.body = body;
    }
    return cy.request(options);
});
