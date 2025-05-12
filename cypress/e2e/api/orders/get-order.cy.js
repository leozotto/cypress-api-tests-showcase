describe('Orders - Get Order', () => {
  it('should retrieve details of an order', () => {
    const orderId = Cypress.env('orderId')
    cy.getOrder(orderId).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('status', 'confirmed')
    })
  })
})
