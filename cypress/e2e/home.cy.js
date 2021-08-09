import HomePage from '../pages/HomePage';

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should verify home page is visible successfully', () => {
        cy.url().should('eq', Cypress.config().baseUrl + '/');
        cy.get('img[alt="Website for automation practice"]').should('be.visible');
    });

    it('should verify subscription in home page', () => {
        cy.scrollTo('bottom');
        cy.get('#susbscribe_email').should('be.visible');
        HomePage.subscribeToNewsletter('test@example.com');
    });

    it('should verify scroll up without arrow button and scroll down functionality', () => {
        cy.scrollTo('bottom');
        cy.get('#susbscribe_email').should('be.visible');
        cy.scrollTo('top');
        cy.get('img[alt="Website for automation practice"]').should('be.visible');
    });

    it('should verify scroll up using arrow button and scroll down functionality', () => {
        cy.scrollTo('bottom');
        cy.get('#susbscribe_email').should('be.visible');
        cy.get('.fa-angle-up').click();
        cy.get('img[alt="Website for automation practice"]').should('be.visible');
    });
}); 