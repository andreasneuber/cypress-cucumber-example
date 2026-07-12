class ThankYouPage {
    constructor() {
        this.url = "?action=thankYou";
        this.selectors = {
            messageHeading: 'h2'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    grabThankYouMessage() {
        return cy.get(this.selectors.messageHeading);
    }
}

export default new ThankYouPage();