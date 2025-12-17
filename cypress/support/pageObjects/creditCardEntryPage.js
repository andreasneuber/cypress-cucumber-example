class CreditCardEntryPage {
    constructor() {
        this.url = "?action=form3";
        this.selectors = {
            cardNameInput: '#cname',
            cardNumberInput: '#ccnum',
            expiryDateInput: '#expdate',
            cvvInput: '#cvv',
            payNowButton: '#btnPaynow',
            entryForm: '#ccentry'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    enterCardInformation(cardname, ccnumber, expiryDate, cvv) {
        cy.get(this.selectors.cardNameInput).clear().type(cardname);
        cy.get(this.selectors.cardNumberInput).clear().type(ccnumber);
        cy.get(this.selectors.expiryDateInput).clear().type(expiryDate);
        cy.get(this.selectors.cvvInput).clear().type(cvv);
        return this;
    }

    submitPayment() {
        cy.get(this.selectors.payNowButton).click();
        return this;
    }

    getCreditCardInfoEntryForm() {
        return cy.get(this.selectors.entryForm);
    }
}

export default new CreditCardEntryPage();