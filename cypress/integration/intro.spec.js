describe('Intro page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('displays intro text', () => {
    cy.contains('Here are some examples');
  });
  it('displays menu', () => {
    cy.contains('Load from URL');
    cy.contains('Load from file');
  });
});
