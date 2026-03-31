describe('Tests de régression visuelle', () => {

  it('Capture la page de connexion', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.screenshot('page-connexion')
    cy.get('h2').should('have.text', 'Login Page')
  })

  it('Capture la Todo List vide', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.screenshot('todo-list-vide')
    cy.get('.new-todo').should('be.visible')
  })

  it('Capture la Todo List avec des tâches', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('.new-todo').type('Tâche 1{enter}')
    cy.get('.new-todo').type('Tâche 2{enter}')
    cy.screenshot('todo-list-avec-taches')
    cy.get('.todo-list li').should('have.length', 2)
  })

})