// Custom command for login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(password);
  cy.get('[data-qa="login-button"]').click();
});

// Custom command for registration
Cypress.Commands.add('register', (name, email, password) => {
  cy.visit('/signup');
  cy.get('[data-qa="signup-name"]').type(name);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
  cy.get('[data-qa="password"]').type(password);
  cy.get('[data-qa="first_name"]').type('Test');
  cy.get('[data-qa="last_name"]').type('User');
  cy.get('[data-qa="address"]').type('123 Test St');
  cy.get('[data-qa="country"]').select('United States');
  cy.get('[data-qa="state"]').type('Test State');
  cy.get('[data-qa="city"]').type('Test City');
  cy.get('[data-qa="zipcode"]').type('12345');
  cy.get('[data-qa="mobile_number"]').type('1234567890');
  cy.get('[data-qa="create-account"]').click();
});

// Custom command for adding product to cart
Cypress.Commands.add('addToCart', (productName) => {
  cy.contains(productName).parent().parent().find('.add-to-cart').click();
});

// Custom command for checking if element is visible in viewport
Cypress.Commands.add('isInViewport', { prevSubject: true }, (subject) => {
  const bottom = Cypress.$(cy.state('window')).height();
  const rect = subject[0].getBoundingClientRect();

  expect(rect.top).not.to.be.greaterThan(bottom);
  expect(rect.bottom).not.to.be.lessThan(0);
  return subject;
}); 