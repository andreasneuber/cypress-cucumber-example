class EmployeePage {
    constructor() {
        this.url = "?action=employee";
        this.selectors = {
            pageHeading: 'h2',
            employeeNameInput: '#employee-name',
            searchButton: '#btnSearch',
            employeeDetails: '#employee-details',
            employeeName: '.employee.name',
            employeeDepartment: '.employee.department'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    employeePageIsDisplayed() {
        return cy.get(this.selectors.pageHeading).contains('Human Resources - Find employee');
    }

    fillEmployeeNameInput(employeeName) {
        cy.get(this.selectors.employeeNameInput).clear().type(employeeName);
        return this;
    }

    clickSearchBtn() {
        cy.get(this.selectors.searchButton).click();
        return this;
    }

    employeeRecordIsDisplayed() {
        return cy.get(this.selectors.employeeDetails);
    }

    grabEmployeeName() {
        return cy.get(this.selectors.employeeName).invoke('text');
    }

    grabDepartmentName() {
        return cy.get(this.selectors.employeeDepartment).invoke('text');
    }
}

export default new EmployeePage();