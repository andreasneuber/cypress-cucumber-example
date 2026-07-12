class UserAccountPage {
    constructor() {
        this.url = "?action=useraccount";
        this.selectors = {
            userAccountHeading: 'h2',
            adminDashboardHeading: 'h2',
            hrResourcesLink: '#hr-resources-link',
            salesLink: '#sales-statistics-link'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    displayTitleForm() {
        return cy.get(this.selectors.userAccountHeading).contains('User Account').should('be.visible');
    }

    displayAdminDashboard() {
        return cy.get(this.selectors.adminDashboardHeading).contains('Admin Dashboard');
    }

    navigateToHumanResourcesSection() {
        cy.get(this.selectors.hrResourcesLink).click();
        return this;
    }

    navigateToSalesSection() {
        cy.get(this.selectors.salesLink).click();
        return this;
    }
}

export default new UserAccountPage();