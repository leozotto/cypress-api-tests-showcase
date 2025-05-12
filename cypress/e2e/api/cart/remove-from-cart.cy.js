describe('Cart - Remove from Cart', () => {
  it('should remove product from cart', () => {
    cy.removeFromCart(1).then((response) => {
      expect(response.status).to.eq(204)
    })
  })
})
