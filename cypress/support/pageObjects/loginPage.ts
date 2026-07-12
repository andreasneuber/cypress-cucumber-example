class LoginPage {
    constructor() {
        this.url = "?action=form4";
        this.selectors = {
            usernameInput: 'input[name="user"]',
            passwordInput: 'input[name="pw"]',
            loginButton: '#btnLogin',
            titleHeading: 'h2'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    provideUsername(username) {
        cy.get(this.selectors.usernameInput).clear().type(username);
        return this;
    }

    providePassword(password) {
        cy.get(this.selectors.passwordInput).clear().type(password);
        return this;
    }

    login(username, password) {
        this.provideUsername(username);
        this.providePassword(password);
        return this;
    }

    clickLogin() {
        cy.get(this.selectors.loginButton).click();
        return this;
    }

    getTitleForm() {
        return cy.get(this.selectors.titleHeading).should('have.text', 'User 123');
    }
}

export default new LoginPage();