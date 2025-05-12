describe('Login - Success', () => {
  it('should login with valid credentials and return a token', () => {
    cy.apiLogin('standard_user', 'secret_sauce').then(() => {
      cy.get('@token').should('exist')
    })
  })
})
