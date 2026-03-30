describe('Tests application Todo List', () => {

  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/')
  })

  it('Ajoute une nouvelle tâche', () => {
    cy.get('.new-todo').type('Apprendre Cypress{enter}')
    cy.get('.todo-list li').should('have.length', 1)
    cy.get('.todo-list li').first().should('have.text', 'Apprendre Cypress')
  })
it('Coche une tâche comme terminée', () => {
    cy.get('.new-todo').type('Apprendre Cypress{enter}')
    cy.get('.todo-list li .toggle').click()
    cy.get('.todo-list li').should('have.class', 'completed')
  })

  it('Supprime une tâche', () => {
    cy.get('.new-todo').type('Apprendre Cypress{enter}')
    cy.get('.todo-list li').trigger('mouseover')
    cy.get('.todo-list li .destroy').click({ force: true })
    cy.get('.todo-list li').should('not.exist')
  })

  it('Ajoute plusieurs tâches', () => {
    cy.get('.new-todo').type('Tâche 1{enter}')
    cy.get('.new-todo').type('Tâche 2{enter}')
    cy.get('.new-todo').type('Tâche 3{enter}')
    cy.get('.todo-list li').should('have.length', 3)
  })
})