describe('App', function() {
  describe('when first page has opened', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000');
    });

    it('breeds are visible', function() {
      cy.contains('Cat Project');
      cy.contains('Bengal');
    });

    it('filtering works', function() {
      cy.get('[placeholder="Search breeds by name or origin"]').type('Persian');
      cy.contains('Persian');
      cy.contains('Bengal').should('not.exist');
    });

    it('breeds are paginated', function() {
      cy.contains('Bengal');
      cy.contains('Himalayan').should('not.exist');
      cy.contains('1-5 of 6');

      cy.get('[placeholder="Search breeds by name or origin"]').type('Scotland');
      cy.contains('1-1 of 1');
    });
  });
});
