class CelsiusToFahrenheitPage {
    constructor() {
        this.url = "?action=form6";
        this.selectors = {
            celsiusInput: 'input[name="celsius"]',
            fahrenheitInput: 'input[name="fahrenheit"]',
            convertButton: '#btnCelsius'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    provideCelsius(celsiusDegrees) {
        cy.get(this.selectors.celsiusInput).clear().type(celsiusDegrees);
        return this;
    }

    clickConvert() {
        cy.get(this.selectors.convertButton).click();
        return this;
    }

    readFahrenheitField() {
        return cy.get(this.selectors.fahrenheitInput).invoke('attr', 'value');
    }
}

export default new CelsiusToFahrenheitPage();