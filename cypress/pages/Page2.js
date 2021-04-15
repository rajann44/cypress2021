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
// Commit on 2021-02-01 09:38:00: 4512
// Commit on 2021-02-03 18:10:00: 29578
// Commit on 2021-02-04 15:38:00: 17916
// Commit on 2021-02-06 17:46:00: 24876
// Commit on 2021-02-08 10:39:00: 8486
// Commit on 2021-02-09 16:18:00: 29053
// Commit on 2021-02-09 11:02:00: 22634
// Commit on 2021-02-12 12:48:00: 12956
// Commit on 2021-02-14 18:56:00: 5429
// Commit on 2021-02-15 18:56:00: 13705
// Commit on 2021-02-16 15:22:00: 1223
// Commit on 2021-02-20 09:27:00: 15352
// Commit on 2021-02-22 16:24:00: 15254
// Commit on 2021-02-23 17:12:00: 18038
// Commit on 2021-02-26 10:17:00: 17301
// Commit on 2021-02-28 10:03:00: 23132
// Commit on 2021-03-02 15:01:00: 25012
// Commit on 2021-03-08 17:54:00: 23392
// Commit on 2021-03-09 09:07:00: 27485
// Commit on 2021-03-12 13:28:00: 23989
// Commit on 2021-03-13 12:34:00: 16965
// Commit on 2021-03-14 11:25:00: 31009
// Commit on 2021-03-18 14:47:00: 1833
// Commit on 2021-03-19 13:34:00: 21879
// Commit on 2021-03-21 10:59:00: 28363
// Commit on 2021-03-22 12:51:00: 27386
// Commit on 2021-03-23 15:44:00: 8266
// Commit on 2021-03-26 16:10:00: 13183
// Commit on 2021-03-27 14:51:00: 956
// Commit on 2021-03-30 14:19:00: 6487
// Commit on 2021-03-31 17:51:00: 21184
// Commit on 2021-04-02 12:43:00: 11794
// Commit on 2021-04-07 16:59:00: 9149
// Commit on 2021-04-10 16:35:00: 32315
// Commit on 2021-04-10 12:10:00: 25711
// Commit on 2021-04-12 14:59:00: 17280
// Commit on 2021-04-13 14:04:00: 11823
// Commit on 2021-04-15 17:28:00: 24851
