import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('je suis sur la page de connexion', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
})

When('je saisis {string} et le mot de passe {string}', (username, password) => {
  cy.get('#username').type(username)
  cy.get('#password').type(password)
  cy.get('button[type="submit"]').click()
})

Then('je suis redirigé vers la page sécurisée', () => {
  cy.contains('You logged into a secure area!').should('be.visible')
})

Then("je vois un message d'erreur", () => {
  cy.contains('Your username is invalid!').should('be.visible')
})
