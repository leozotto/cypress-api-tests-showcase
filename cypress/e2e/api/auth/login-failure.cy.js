describe('Login - Failure', () => {
  it('should return 401 for invalid credentials', () => {
    cy.apiLogin('invalid_user', 'wrong_password').then((response) => {
      expect(response.status).to.eq(401)
    })
  })
})
