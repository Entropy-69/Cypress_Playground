describe('Basic UI tests', () => {
  it('Homepage has correct content', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('have.text', 'Kitchen Sink')
    cy.get(':nth-child(3) > .container > .row > #utilities > p').should('have.text', 'Commands drive your tests in the browser like a real user would. They let you perform actions like typing, clicking, xhr requests, and can also assert things like "my button should be disabled".');
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').should('have.attr', 'href', '/commands/querying');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click();
    cy.get('h1').should('have.text', 'Utilities');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.dropdown-toggle').click();
    cy.get('.dropdown-menu > :nth-child(1) > a').click();
    cy.get('#inputName').clear('a');
    const x=1;
    if(x===3){
      cy.get('#inputName').type('is equal to one');
    }else{
      cy.get('#inputName').type('not equal to one');

    }    
  })
})