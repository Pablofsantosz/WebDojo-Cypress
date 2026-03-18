describe('Formulário de Consultoria', () => {
  it('Deve solicitar consultoria individual', () => {
    cy.Start()
    cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

    cy.goTo('Formulários','Consultoria')

  });
});
