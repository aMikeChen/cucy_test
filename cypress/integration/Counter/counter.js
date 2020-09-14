import {
  Given,
  When,
  Then
} from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000';

Given('I open the home page', () => {
  cy.visit(url);
});

When('I click the increment button', () => {
  cy.get('[data-testid="increment-btn"]')
    .click();
});

Then('I see the counter value is {int}', (value) => {
  cy.get('[data-testid="counter"]')
    .contains(value);
});
