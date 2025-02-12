describe('Samples page test', () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/samples");
  });

  it('Should contain all component samples', () => {
    cy.contains('Select - Visão Geral (Normal)');
    cy.contains('Select - Visão Geral (Disabled)');
    cy.contains('Select - Visão Geral (Error)');
    cy.contains('Switch - Visão Geral (Normal)');
    cy.contains('Switch - Visão Geral (Disabled)');
  })
})