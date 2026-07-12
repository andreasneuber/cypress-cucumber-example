class ProvideYourDetailsPage {
    constructor() {
        this.url = "?action=form1";
        this.selectors = {
            firstNameInput: '#fname',
            lastNameInput: '#lname',
            streetInput: '#street',
            cityInput: '#city',
            zipInput: '#zip',
            stateInput: '#state',
            countryInput: '#country',
            mobileInput: '#mobile',
            homeInput: '#home',
            emailInput: '#email',
            submitButton: '#submit-info'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    provideFirstname(firstName) {
        cy.get(this.selectors.firstNameInput).clear().type(firstName);
        return this;
    }

    provideLastName(lastName) {
        cy.get(this.selectors.lastNameInput).clear().type(lastName);
        return this;
    }

    provideStreet(street) {
        cy.get(this.selectors.streetInput).clear().type(street);
        return this;
    }

    provideCity(city) {
        cy.get(this.selectors.cityInput).clear().type(city);
        return this;
    }

    provideZip(zipCode) {
        cy.get(this.selectors.zipInput).clear().type(zipCode);
        return this;
    }

    provideState(state) {
        cy.get(this.selectors.stateInput).clear().type(state);
        return this;
    }

    provideCountry(country) {
        cy.get(this.selectors.countryInput).clear().type(country);
        return this;
    }

    provideMobilePhoneNumber(number) {
        cy.get(this.selectors.mobileInput).clear().type(number);
        return this;
    }

    provideHomePhoneNumber(number) {
        cy.get(this.selectors.homeInput).clear().type(number);
        return this;
    }

    provideEmail(email) {
        cy.get(this.selectors.emailInput).clear().type(email);
        return this;
    }

    clickSubmitYourInformation() {
        cy.get(this.selectors.submitButton).click();
        return this;
    }
}

export default new ProvideYourDetailsPage();