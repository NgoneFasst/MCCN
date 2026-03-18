describe('Test avec cy.intercept()', () => {

  it('Intercepte la requête de connexion', () => {
    cy.intercept('POST', '**/login').as('loginRequest')
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
    })
  })

  it('Vérifie que la page secure est bien chargée', () => {
    cy.intercept('GET', '**/secure').as('securePage')
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.wait('@securePage').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
    })
  })

})