describe('Tests API avec Cypress', () => {

  it('GET - Récupère la liste des utilisateurs', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.length(10)
      })
  })

  it('GET - Récupère un utilisateur par ID', () => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('id', 1)
        expect(response.body).to.have.property('name')
      })
  })
  it('POST - Crée un nouvel utilisateur', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/users', {
      name: 'John Doe',
      email: 'john@example.com'
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).to.have.property('name', 'John Doe')
    })
  })

  it('DELETE - Supprime un utilisateur', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        expect(response.status).to.equal(200)
      })
  })

})