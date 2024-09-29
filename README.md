# 🛒 E-Commerce Backend

This is a Node.js and MongoDB-based backend for an e-commerce application. It includes key features such as user authentication, product management, order processing, and more.

### 1. conception 

### 📝 Product Backlog

| **ID** | **Feature**                  | **Epic**                  | **Priority** | **User Story**                                                                                                                                      |
|-------|------------------------------|---------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | Product Management            | Product and Categories    | High         | As an admin, I want to add, edit, and delete products so that I can manage the store’s inventory effectively.                                        |
| 2     | Category Management           | Product and Categories    | High         | As an admin, I want to create, update, and delete product categories so that users can browse products by category.                                  |
| 3     | Order Management              | Orders                    | High         | As a user, I want to place an order, view my order history, and track my order status so that I know when my order will arrive.                      |
| 4     | Order Item Management         | Orders                    | High         | As a user, I want to add items to my order, change the quantity, or remove items before I complete my purchase so that I can adjust my cart easily.  |
| 5     | User Registration             | User Management           | Medium       | As a new user, I want to register by providing my email and password so that I can create an account on the platform.                                |
| 6     | User Login                    | User Management           | Medium       | As a registered user, I want to log in with my email and password so that I can access my account.                                                   |
| 7     | User Role Management          | User Management           | Medium       | As an admin, I want to assign roles (admin, user) so that I can control who can manage the products and orders.                                      |
| 8     | User Authentication with JWT  | User Management           | Medium       | As a user, I want to be authenticated using a secure token (JWT) so that my session remains active after login without re-entering credentials.      |

### General Use-case diagram


### General Class diagram


## 📁 Data Structures

### 1. **User**
   ```json
   {
     "_id": "ObjectId",
     "name": "String",
     "email": "String",
     "passwordHash": "String",
     "isAdmin": "Boolean",
     "dateCreated": "Date"
   }
   ```

### 2. **Product**
   ```json
   {
     "_id": "ObjectId",
     "name": "String",
     "description": "String",
     "image": "String",
     "brand": "String",
     "price": "Number",
     "category": "ObjectId",
     "countInStock": "Number",
     "rating": "Number",
     "numReviews": "Number",
     "dateCreated": "Date"
   }
   ```

### 3. **Order**
   ```json
   {
     "_id": "ObjectId",
     "orderItems": [
       {
         "product": "ObjectId",
         "quantity": "Number",
         "price": "Number"
       }
     ],
     "shippingAddress": "String",
     "city": "String",
     "zip": "String",
     "country": "String",
     "phone": "String",
     "status": "String",
     "totalPrice": "Number",
     "user": "ObjectId",
     "dateOrdered": "Date"
   }
   ```

### 4. **Category**
   ```json
   {
     "_id": "ObjectId",
     "name": "String",
     "icon": "String",
     "color": "String"
   }
   ```

### 5. **OrderItem**
   ```json
   {
     "_id": "ObjectId",
     "product": "ObjectId",
     "quantity": "Number",
     "price": "Number"
   }
   ```

---

## 🚀 Technologies Used

- **Node.js**: Backend JavaScript runtime environment.
- **Express.js**: Web application framework for handling API routes.
- **MongoDB**: NoSQL database for storing data such as users, products, and orders.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB, handling database operations and schema definitions.
- **JSON Web Tokens (JWT)**: For user authentication and authorization.
- **bcryptjs**: For hashing and comparing passwords.
- **dotenv**: For managing environment variables.

---

## 💡 Functionalities

### 1. **User Authentication & Authorization**
   - User registration with hashed passwords.
   - Login functionality with JWT-based authentication.
   - Admin roles for managing product listings and order statuses.

### 2. **Product Management**
   - CRUD (Create, Read, Update, Delete) operations on products.
   - Filter products by category, price range, or availability.
   - Manage product stock and availability.

### 3. **Order Management**
   - Users can place orders by adding items to the cart.
   - Create, view, and update order details.
   - Track order statuses (e.g., Pending, Shipped, Delivered).
   - Calculate total prices based on product prices and quantities.

### 4. **Category Management**
   - Create, update, and delete product categories.
   - Associate products with categories for easier filtering.

---

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-backend.git
   cd ecommerce-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with the following keys (Or use the existing .env file):
   ```bash
   MONGO_URI=<Your MongoDB Connection String>
   JWT_SECRET=<Your JWT Secret>
   PORT=<Server Port>
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## 📜 API Endpoints

### User
- `POST /users/register`: Register a new user.
- `POST /users/login`: Login and generate JWT.
- `GET /users/:id`: Get user details.

### Product
- `GET /products`: Fetch all products.
- `GET /products/:id`: Fetch product details by ID.
- `POST /products`: Add a new product (Admin).
- `PUT /products/:id`: Update a product (Admin).
- `DELETE /products/:id`: Delete a product (Admin).

### Order
- `GET /orders`: Fetch all orders (Admin).
- `GET /orders/:id`: Fetch order details by ID.
- `POST /orders`: Place a new order.
- `PUT /orders/:id`: Update order status (Admin).

### Category
- `GET /categories`: Fetch all categories.
- `POST /categories`: Add a new category (Admin).
- `PUT /categories/:id`: Update a category (Admin).
- `DELETE /categories/:id`: Delete a category (Admin).

---

## 🛑 License

This project is licensed under the MIT License.

---

## 📧 Contact

Feel free to reach out if you have any questions or suggestions!

- Email: ihebagrebi810@example.com
- GitHub: [Iheb-AG](https://github.com/Iheb-AG)

---
