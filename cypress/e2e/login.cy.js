import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

describe('Test Login avec Page Object Model', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('Connexion avec des identifiants valides', () => {
    loginPage.login('tomsmith', 'SuperSecretPassword!')
    loginPage.getSuccessMessage().should('be.visible')
  })

  it('Connexion avec des identifiants invalides', () => {
    loginPage.login('mauvaisutilisateur', 'mauvaismdp')
    loginPage.getErrorMessage().should('be.visible')
  })

})