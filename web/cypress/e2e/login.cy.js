
describe('Login', () => {
  it("Deve logar com sucesso",() => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('katana123')

    cy.contains('button', 'Entrar').click()

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy=welcome-message]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
    cy.wait(5000)
    
  })
  it("Não deve logar com senha inválida",() => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('papito@webdojo.com')
    cy.get('#password').type('123')

    cy.contains('button', 'Entrar').click()
    cy.get('.title').should('be.visible').and('have.text','Acesso negado! Tente novamente.')
    // Ou
    cy.contains('.title', 'Acesso negado! Tente novamente.').should('be.visible')
	     
  })
   it("Não deve logar com email não cadastrado",() => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')

    cy.get('#email').type('pablo@webdojo.com')
    cy.get('#password').type('123')

    cy.contains('button', 'Entrar').click()
    cy.get('.title').should('be.visible').and('have.text','Acesso negado! Tente novamente.')
    // Ou
    cy.contains('.title', 'Acesso negado! Tente novamente.').should('be.visible')
	     
  })


})