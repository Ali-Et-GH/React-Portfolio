# React Todo App

A simple and modern Todo List application built with **React 19**, **Redux Toolkit**, and **React Router**. The project includes user authentication, CRUD operations for todos, API integration with Axios, and a light/dark theme.

# Features

- Add, edit, delete, and complete todos
- User login and logout
- User-specific todo lists
- Light and dark mode
- Global state management with Redux Toolkit
- API communication with Axios
- Responsive and clean interface
- Client-side routing with React Router

# Pages

- Todo List
- Login

# Technologies

- React 19
- Redux Toolkit
- React Redux
- React Router
- Axios
- React Icons
- Vite
- CSS Modules
- Express.js

# Backend

The project includes a lightweight **Express.js backend simulation** for handling authentication and todo operations.

It provides endpoints for:

- User login
- Retrieving todos
- Adding todos
- Editing todos
- Removing todos
- Toggling todo completion

The backend stores data in memory and is intended for development and demonstration purposes.

# Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/Ali-Et-GH/React-Portfolio/new/main/Online-Shop
cd Todo-App
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
### 4. Start the backend

Open another terminal:
```bash
cd backend-sim
npm install
npm run dev
```
The frontend will be available at the local URL provided by Vite, while the backend runs on:

http://localhost:3000
# Build

To create a production build:
```bash
cd frontend
npm run build
```
The production files will be generated in the dist directory.
