class CreditCardResponsePage {
    constructor() {
        this.url = "?action=responsecc";
        this.selectors = {
            alertBox: '.alert',
            response: '.response',
            moreInfo: '.more-info'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    getAlertMessageBox() {
        return cy.get(this.selectors.alertBox);
    }

    grabResponseFromAlertBox() {
        return cy.get(this.selectors.response).invoke('text');
    }

    grabMoreInfoFromAlertBox() {
        return cy.get(this.selectors.moreInfo).invoke('text');
    }
}

export default new CreditCardResponsePage();