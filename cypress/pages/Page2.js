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
// Commit on 2021-01-12 11:17:00: 21818
// Commit on 2021-01-13 14:30:00: 28419
// Commit on 2021-01-14 13:18:00: 24049
// Commit on 2021-01-16 12:32:00: 14835
// Commit on 2021-01-18 18:14:00: 11091
// Commit on 2021-01-19 11:30:00: 26468
// Commit on 2021-01-20 16:00:00: 24850
// Commit on 2021-01-25 11:25:00: 15554
// Commit on 2021-01-26 09:28:00: 21802
// Commit on 2021-01-29 11:23:00: 27754
// Commit on 2021-01-30 10:00:00: 3582
// Commit on 2021-01-31 11:58:00: 17945
