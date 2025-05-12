# 🧪 Cypress API Automation – Saucedemo

This project contains a complete Cypress test suite for API scenarios on saucedemo.com. The tests follow best practices using custom commands, clean structure, and are divided by features.

## 📁 Project Structure

cypress/  
├── e2e/  
│   └── api/  
│       ├── auth/  
│       ├── products/  
│       ├── cart/  
│       ├── checkout/  
│       └── orders/  
├── support/  
│   └── commands.js  

- `auth/` – Login scenarios (valid, invalid credentials)
- `products/` – Get products and product details by ID
- `cart/` – Add and remove products from cart
- `checkout/` – Checkout flow validation (valid and invalid)
- `orders/` – Create and get orders
- `commands.js` – All custom commands (login, add to cart, checkout, etc.)

---

## ✅ Test Scenarios
| #  | Feature  | Scenario Description                                |
| -- | -------- | --------------------------------------------------- |
| 1  | Login    | Valid login with standard user                      |
| 2  | Login    | Invalid password shows error message                |
| 3  | Products | Get list of all products                            |
| 4  | Products | Get product details by product ID                   |
| 5  | Cart     | Add product to cart                                 |
| 6  | Cart     | Remove product from cart                            |
| 7  | Checkout | Successful checkout process                         |
| 8  | Checkout | Validation when fields are missing (checkout error) |
| 9  | Orders   | Create order with payment method                    |
| 10 | Orders   | Get order details by order ID                       |


---
## 🧰 Technologies
- Cypress 14+
- JavaScript (ES6)

---
👨‍💻 Author  
@Leonardo Zotto
