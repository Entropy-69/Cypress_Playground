describe('Basic UI tests', () => {
  it('Homepage has correct content', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('have.text', 'Kitchen Brink')
  })
})