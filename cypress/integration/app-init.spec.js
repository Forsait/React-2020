describe('App initialization', () => {
  const baseUrl = Cypress.config().baseUrl;
  it('Loads home page', () => {
    cy.visit(baseUrl);

    cy.get('div#root').should('exist');
  })
})