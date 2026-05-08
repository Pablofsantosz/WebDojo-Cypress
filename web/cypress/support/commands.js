// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Comando para iniciar o teste, definindo a resolução e visitando a página inicial do aplicativo
Cypress.Commands.add('Start',() =>{
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000/')
})
// Comando para preencher o formulário de login
Cypress.Commands.add('SubmitLoginForm',(email,senha) => {
    
    cy.get('#email').type(email)
    cy.get('#password').type(senha)

    cy.contains('button', 'Entrar').click()
})
// Comando para navegar para uma página específica através de um botão e verificar o título da página
Cypress.Commands.add('goTo',(ButtonName,pageTitle) =>{
    cy.contains('button', ButtonName)
        .should('be.visible')
        .click()
    //Ou cy.contains('Formulários').click()


    cy.contains('h1', pageTitle).should('be.visible')
    //Ou cy.contains( pageTitle).should('be.visible')
    //Ou cy.get('h1').should('have.text', pageTitle)

})