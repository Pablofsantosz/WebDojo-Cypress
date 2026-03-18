
describe('Login', () => {
  it("Deve logar com sucesso",() => {
    cy.SubmeterLogin('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy=welcome-message]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')
    cy.wait(5000)
    
  })


  it("Não deve logar com senha inválida",() => {
    cy.SubmeterLogin('papito@webdojo.com', '1234')

    cy.get('.title').should('be.visible').and('have.text','Acesso negado! Tente novamente.')
    // Ou
    cy.contains('.title', 'Acesso negado! Tente novamente.').should('be.visible')
    //OU
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
	     
  })

  
   it("Não deve logar com email não cadastrado",() => {
    cy.SubmeterLogin('nao_cadastrado@webdojo.com', 'katana123')

    cy.contains('button', 'Entrar').click()
    cy.get('.title').should('be.visible').and('have.text','Acesso negado! Tente novamente.')
    // Ou
    cy.contains('.title', 'Acesso negado! Tente novamente.').should('be.visible')
	     
  })
  
})