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
// Commit on 2021-04-17 09:02:00: 24746
// Commit on 2021-04-19 17:57:00: 12091
// Commit on 2021-04-22 14:04:00: 32273
// Commit on 2021-04-23 18:09:00: 2796
// Commit on 2021-04-25 10:11:00: 25213
// Commit on 2021-04-28 17:32:00: 24502
// Commit on 2021-04-29 12:58:00: 7914
// Commit on 2021-04-30 16:06:00: 32500
// Commit on 2021-05-03 16:06:00: 32002
// Commit on 2021-05-06 17:13:00: 20691
// Commit on 2021-05-09 16:04:00: 7811
// Commit on 2021-05-12 14:23:00: 7673
// Commit on 2021-05-13 18:40:00: 18092
// Commit on 2021-05-16 18:35:00: 19289
// Commit on 2021-05-22 12:25:00: 16790
// Commit on 2021-05-23 17:40:00: 14398
// Commit on 2021-05-24 16:41:00: 24639
// Commit on 2021-05-25 14:35:00: 14209
// Commit on 2021-05-26 11:37:00: 4410
// Commit on 2021-05-29 10:59:00: 23896
// Commit on 2021-05-30 10:18:00: 4334
// Commit on 2021-05-31 17:20:00: 21565
// Commit on 2021-06-02 17:37:00: 25927
// Commit on 2021-06-05 09:07:00: 17902
// Commit on 2021-06-06 15:08:00: 11430
// Commit on 2021-06-08 13:07:00: 28079
// Commit on 2021-06-11 18:36:00: 14413
// Commit on 2021-06-12 17:52:00: 10649
// Commit on 2021-06-17 16:41:00: 30255
// Commit on 2021-06-20 17:55:00: 8939
// Commit on 2021-06-21 15:17:00: 24637
// Commit on 2021-06-23 13:11:00: 7506
// Commit on 2021-06-26 14:36:00: 10486
// Commit on 2021-06-27 16:35:00: 23531
// Commit on 2021-06-28 12:36:00: 12417
// Commit on 2021-06-30 18:45:00: 25687
// Commit on 2021-07-02 10:44:00: 24875
