class SalesPage {
    constructor() {
        this.url = "?action=sales";
        this.selectors = {
            pageHeading: 'h2',
            yearMonthHeader: '.sales.header-year-month',
            tableCell: 'td'
        };
    }

    visit() {
        cy.visit(this.url);
        return this;
    }

    salesStatisticsPageIsDisplayed() {
        return cy.get(this.selectors.pageHeading).contains('Sales - Statistics');
    }

    grabYearMonthHeader() {
        return cy.get(this.selectors.yearMonthHeader);
    }

    monthCellIsDisplayed(month) {
        return cy.get(this.selectors.tableCell).contains(month);
    }

    grabSalesAmountFromMonth(month) {
        return cy.get(this.selectors.tableCell).contains(month).next().invoke('text');
    }
}

export default new SalesPage();