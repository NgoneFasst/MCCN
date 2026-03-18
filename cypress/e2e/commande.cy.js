describe('Test avec commandes personnalisées', () => {

  it('Connexion réussie avec la commande login', () => {
    cy.login('tomsmith', 'SuperSecretPassword!')
    cy.contains('You logged into a secure area!').should('be.visible')
  })

  it('Connexion échouée avec la commande login', () => {
    cy.login('mauvaisutilisateur', 'mauvaismdp')
    cy.contains('Your username is invalid!').should('be.visible')
  })

})