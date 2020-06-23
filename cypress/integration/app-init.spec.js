describe('App initialization', () => {
  const baseUrl = Cypress.config().baseUrl;
  
  it('Loads home page', () => {
    cy.visit(baseUrl);

    cy.get('.brand')
      .first()
      .should('have.css', 'color')
      .and('eq', 'rgb(246, 82, 97)')
  });

});
