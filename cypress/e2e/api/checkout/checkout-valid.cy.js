describe('Checkout - Valid', () => {
  it('should proceed to checkout with valid data', () => {
    const checkoutData = {
      firstName: 'John',
      lastName: 'Doe',
      postalCode: '12345',
    }
    cy.checkout(checkoutData).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('summary')
    })
  })
})
