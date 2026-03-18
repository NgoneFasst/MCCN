describe('Test formulaire de connexion avec fixtures', () => {

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('Connexion avec des identifiants valides', () => {
    cy.fixture('utilisateurs').then((data) => {
      cy.get('#username').type(data.valide.username)
      cy.get('#password').type(data.valide.password)
      cy.get('button[type="submit"]').click()
      cy.contains('You logged into a secure area!').should('be.visible')
    })
  })

  it('Connexion avec des identifiants invalides', () => {
    cy.fixture('utilisateurs').then((data) => {
      cy.get('#username').type(data.invalide.username)
      cy.get('#password').type(data.invalide.password)
      cy.get('button[type="submit"]').click()
      cy.contains('Your username is invalid!').should('be.visible')
    })
  })

})