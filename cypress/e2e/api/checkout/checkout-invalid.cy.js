describe('Checkout - Invalid', () => {
  it('should return error if required fields are missing', () => {
    const invalidData = {}
    cy.checkout(invalidData).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error')
    })
  })
})
