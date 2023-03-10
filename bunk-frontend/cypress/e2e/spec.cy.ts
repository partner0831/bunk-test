describe('Calculator', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('has the correct title', () => {
    cy.title().should('equal', 'BunkCalculator');
  });

  it('Insert User and Settle-up', () => {
    cy.get('[data-testid="open-modal"]').click();
    cy.get('[data-testid="user-name"]').type('test');
    cy.get('[data-testid="amount"]').type('10');
    cy.get('[data-testid="insert-user"]').click();
    cy.get('[data-testid="settle-up"]').click();
  });

})
