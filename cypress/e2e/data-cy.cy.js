describe('Test avec sélecteurs data-cy', () => {

  beforeEach(() => {
    cy.visit('index.html')
  })

  it('Vérifie que le titre est visible', () => {
    cy.getByDataCy('titre').should('be.visible')
    cy.getByDataCy('titre').should('have.text', 'Bienvenue !')
  })

  it('Vérifie que le formulaire est bien affiché', () => {
    cy.getByDataCy('champ-username').should('be.visible')
    cy.getByDataCy('champ-password').should('be.visible')
    cy.getByDataCy('btn-connexion').should('be.visible')
  })

  it('Remplit le formulaire', () => {
    cy.getByDataCy('champ-username').type('monUtilisateur')
    cy.getByDataCy('champ-password').type('monMotDePasse')
    cy.getByDataCy('champ-username').should('have.value', 'monUtilisateur')
    cy.getByDataCy('champ-password').should('have.value', 'monMotDePasse')
  })

})