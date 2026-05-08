describe('Formulário de Consultoria', () => {
  it('Deve solicitar consultoria individual', () => {
    cy.Start()
    cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

    cy.goTo('Formulários','Consultoria')

  });

  it('Input de dados no formulario da consultoria ', ()=>{
    cy.Start();
    cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

    cy.goTo('Formulários','Consultoria')

    cy.get('#name').type('Pablo felipe')
    cy.get('#email').type('Pablinho123@gmail.com')
    

  });
  
});
