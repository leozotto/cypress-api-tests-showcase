describe('Orders - Create Order', () => {
  it('should create an order successfully', () => {
    cy.createOrder('card').then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('orderId')
      Cypress.env('orderId', response.body.orderId)
    })
  })
})
