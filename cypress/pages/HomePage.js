class HomePage {
    // Selectors
    elements = {
        signupLoginBtn: 'a[href="/login"]',
        productsBtn: 'a[href="/products"]',
        cartBtn: 'a[href="/view_cart"]',
        testCasesBtn: 'a[href="/test_cases"]',
        apiTestingBtn: 'a[href="/api_list"]',
        videoTutorialsBtn: 'a[href="/video_tutorials"]',
        contactUsBtn: 'a[href="/contact_us"]',
        logoutBtn: 'a[href="/logout"]',
        deleteAccountBtn: 'a[href="/delete_account"]',
        loggedInAs: '.fa-user',
        subscriptionEmail: '#susbscribe_email',
        subscriptionBtn: '#subscribe',
        successSubscriptionMsg: '.alert-success'
    }

    // Methods
    clickSignupLogin() {
        cy.get(this.elements.signupLoginBtn).click();
    }

    clickProducts() {
        cy.get(this.elements.productsBtn).click();
    }

    clickCart() {
        cy.get(this.elements.cartBtn).click();
    }

    clickTestCases() {
        cy.get(this.elements.testCasesBtn).click();
    }

    clickApiTesting() {
        cy.get(this.elements.apiTestingBtn).click();
    }

    clickVideoTutorials() {
        cy.get(this.elements.videoTutorialsBtn).click();
    }

    clickContactUs() {
        cy.get(this.elements.contactUsBtn).click();
    }

    clickLogout() {
        cy.get(this.elements.logoutBtn).click();
    }

    clickDeleteAccount() {
        cy.get(this.elements.deleteAccountBtn).click();
    }

    verifyLoggedInAs(username) {
        cy.get(this.elements.loggedInAs).should('contain', username);
    }

    subscribeToNewsletter(email) {
        cy.get(this.elements.subscriptionEmail).type(email);
        cy.get(this.elements.subscriptionBtn).click();
        cy.get(this.elements.successSubscriptionMsg).should('be.visible');
    }
}

export default new HomePage(); 