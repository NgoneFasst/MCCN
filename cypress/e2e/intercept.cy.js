describe('Test avec cy.intercept()', () => {

  it('Vérifie que la page secure est bien chargée', () => {
    cy.intercept('GET', '**/secure').as('securePage')
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.wait('@securePage').then((interception) => {
      expect(interception.response.statusCode).to.equal(200)
    })
  })

})