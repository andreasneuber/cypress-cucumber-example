import {Given, When, Then, Before} from "@badeball/cypress-cucumber-preprocessor";
import celsiusToFahrenheitPage from "../../support/pageObjects/celsiusToFahrenheitPage.js";

Given(/^I provide "([^"]*)" degree Celsius$/, celsius => {
    celsiusToFahrenheitPage.visit();
    celsiusToFahrenheitPage.provideCelsius(celsius);
});
When(/^I click the convert button$/, function () {
    celsiusToFahrenheitPage.clickConvert();
});
Then(/^I should see as result "([^"]*)" Fahrenheit$/, expectedFahrenheit => {
    celsiusToFahrenheitPage.readFahrenheitField().should('equal', expectedFahrenheit);
});
