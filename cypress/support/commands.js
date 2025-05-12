// 📁 cypress/support/commands.js

Cypress.Commands.add('apiLogin', (username = 'standard_user', password = 'secret_sauce') => {
  return cy.request('POST', 'https://api.saucedemo.fake/login', { username, password })
    .then((response) => {
      expect(response.status).to.eq(200)
      Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('getProducts', () => {
  return cy.request({
    method: 'GET',
    url: 'https://api.saucedemo.fake/products',
    headers: { Authorization: `Bearer ${Cypress.env('token')}` },
  })
})

Cypress.Commands.add('getProductById', (id) => {
  return cy.request(`https://api.saucedemo.fake/products/${id}`)
})

Cypress.Commands.add('addToCart', (productId, quantity = 1) => {
  return cy.request({
    method: 'POST',
    url: 'https://api.saucedemo.fake/cart',
    headers: { Authorization: `Bearer ${Cypress.env('token')}` },
    body: { productId, quantity },
  })
})

Cypress.Commands.add('removeFromCart', (itemId) => {
  return cy.request({
    method: 'DELETE',
    url: `https://api.saucedemo.fake/cart/${itemId}`,
    headers: { Authorization: `Bearer ${Cypress.env('token')}` },
  })
})

Cypress.Commands.add('checkout', (data) => {
  return cy.request({
    method: 'POST',
    url: 'https://api.saucedemo.fake/checkout',
    headers: { Authorization: `Bearer ${Cypress.env('token')}` },
    body: data,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('createOrder', (paymentMethod = 'card') => {
  return cy.request({
    method: 'POST',
    url: 'https://api.saucedemo.fake/order',
    headers: { Authorization: `Bearer ${Cypress.env('token')}` },
    body: { paymentMethod },
  })
})

Cypress.Commands.add('getOrder', (orderId) => {
  return cy.request({
    method: 'GET',
    url: `https://api.saucedemo.fake/order/${orderId}`,
    headers: { Authorization: `Bearer ${Cypress.env('token')}` },
  })
})