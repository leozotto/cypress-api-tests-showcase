describe('Products - Get by ID', () => {
  it('should return product details for a valid product ID', () => {
    cy.getProductById(1).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })
})
