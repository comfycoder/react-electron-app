describe('Home Page', () => {
  it('visits the patient list page', () => {
    cy.visit('/');
    cy.contains('Patient List').should('exist');
  });
});
