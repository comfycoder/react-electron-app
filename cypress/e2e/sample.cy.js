describe('Home Page', function () {
    it('visits the patient list page', function () {
        cy.visit('/');
        cy.contains('Patient List').should('exist');
    });
});
