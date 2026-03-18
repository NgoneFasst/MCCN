class LoginPage {

  // Sélecteurs
  getUsernameInput() {
    return cy.get('#username')
  }

  getPasswordInput() {
    return cy.get('#password')
  }

  getSubmitButton() {
    return cy.get('button[type="submit"]')
  }

  getSuccessMessage() {
    return cy.contains('You logged into a secure area!')
  }

  getErrorMessage() {
    return cy.contains('Your username is invalid!')
  }

  // Actions
  visit() {
    cy.visit('https://the-internet.herokuapp.com/login')
  }

  login(username, password) {
    this.getUsernameInput().type(username)
    this.getPasswordInput().type(password)
    this.getSubmitButton().click()
  }

}

export default LoginPage