describe('Logout Test', () => {
  it('logs out from the application', () => {
    cy.login()
    cy.logout()
    cy.url().should('include', 'saucedemo.com')
  })
})
