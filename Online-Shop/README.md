# React Online Shop

A modern online shopping application built with **Next.js**, **React**, and **Redux Toolkit**. The project includes product browsing, category filtering, user authentication, shopping cart management, and light/dark theme support. Product data is retrieved through a custom **Express.js backend** connected to the DummyJSON API.

## Features

- Browse products by category
- View product information
- Add products to the shopping cart
- Remove products from the cart
- Increase and decrease product quantities
- User authentication
- Protected cart page
- Light and dark mode
- Global state management with Redux Toolkit
- API requests with Axios
- Responsive interface

## Pages

- Products
- Cart
- Login

## Technologies

- Next.js
- React
- Redux Toolkit
- React Redux
- Axios
- React Icons
- Next Themes
- CSS Modules
- Express.js
- DummyJSON API

## Backend

The project includes an **Express.js backend** that acts as an API layer between the frontend and the product data source.

The backend handles:

- Product retrieval
- Product category filtering
- User authentication
- Shopping cart management
- Adding and removing products
- Increasing and decreasing product quantities

Product data is retrieved from the [DummyJSON API](https://dummyjson.com/).

## Getting Started

### 1. Clone the repository
```bash
    git clone <repository-url>
    cd Online-Shop
```

### 2. Install frontend dependencies
```bash
    cd frontend
    npm install
```
### 3. Start the frontend
```bash
    npm run dev
```
The frontend will be available at:

    http://localhost:3000

### 4. Start the backend

Open another terminal:
```bash
    cd backend
    npm install
    npm run dev
```
The backend will run on:

    http://localhost:4000

## Build

To create a production build:
```bash
    cd frontend
    npm run build
```
To start the production server:
```bash
    npm start
```
## Demo Login

The development backend includes test accounts:

    Username: admin
    Password: 1234

    Username: ali
    Password: 1234
