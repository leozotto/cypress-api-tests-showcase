describe('Cart - Add to Cart', () => {
  it('should add product to the cart', () => {
    cy.addToCart(1, 2).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('cartId')
    })
  })
})
