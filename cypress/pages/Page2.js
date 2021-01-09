class ContactPage {
    elements = {
        nameInput: '[data-qa="name"]',
        emailInput: '[data-qa="email"]',
        subjectInput: '[data-qa="subject"]',
        messageInput: '[data-qa="message"]',
        submitButton: '[data-qa="submit-button"]',
        successMessage: '.alert-success'
    }

    submitContactForm(name, email, subject, message) {
        cy.get(this.elements.nameInput).type(name);
        cy.get(this.elements.emailInput).type(email);
        cy.get(this.elements.subjectInput).type(subject);
        cy.get(this.elements.messageInput).type(message);
        cy.get(this.elements.submitButton).click();
    }

    verifySuccessMessage() {
        cy.get(this.elements.successMessage).should('be.visible');
    }
}

export default new ContactPage();
// Commit on 2021-01-03 09:05:00: 11438
// Commit on 2021-01-07 17:10:00: 21351
// Commit on 2021-01-08 10:09:00: 30078
// Commit on 2021-01-09 10:28:00: 28162
