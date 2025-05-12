🧪 Cypress API Automation
This project contains a complete Cypress test suite for API scenarios. The tests follow best practices using custom commands, clean structure, and are divided by features.

📁 Project Structure

cypress/  
├── e2e/  
│   └── api/  
│       ├── auth/  
│       │   ├── login-success.cy.js  
│       │   └── login-failure.cy.js  
│       ├── products/  
│       │   ├── get-products.cy.js  
│       │   └── get-product-by-id.cy.js  
│       ├── cart/  
│       │   ├── add-to-cart.cy.js  
│       │   └── remove-from-cart.cy.js  
│       ├── checkout/  
│       │   ├── checkout-valid.cy.js  
│       │   └── checkout-invalid.cy.js  
│       └── orders/  
│           ├── create-order.cy.js  
│           └── get-order.cy.js  
├── support/
│   └── commands.js  

auth/ – Login scenarios (valid, invalid credentials)
products/ – Get products and product details by ID
cart/ – Add and remove products from cart
checkout/ – Checkout flow validation (valid and invalid)
orders/ – Create and get orders
commands.js – All custom commands (login, add to cart, checkout, etc.)

✅ Test Scenarios
#	Feature	Scenario Description
1	Login	Login with valid credentials and return a token
2	Login	Login with invalid credentials returns 401
3	Products	Get list of all products
4	Products	Get product details by product ID
5	Cart	Add product to cart
6	Cart	Remove product from cart
7	Checkout	Checkout with valid data
8	Checkout	Checkout with missing required fields returns error
9	Orders	Create order
10	Orders	Get order details

🧰 Technologies
Cypress 14+
JavaScript (ES6)

👨‍💻 Author
@Leonardo Zotto