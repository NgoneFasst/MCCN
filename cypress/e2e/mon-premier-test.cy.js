describe('Mon deuxième test', () => {
  it('Visite le site de démo Cypress', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Clique sur un lien', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
  })

  it('Tape du texte dans un champ', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-email').type('test@gmail.com')
    cy.get('.action-email').should('have.value', 'test@gmail.com')
  })
})