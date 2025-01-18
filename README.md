# MERN To-Do Application
This repository contains a To-Do application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to manage tasks in "To-Do" and "Completed" categories and includes additional features like a "Delete" drop zone for removing tasks.

## Features
### Task Management

Add tasks to the "To-Do" list.
Move tasks between "To-Do" and "Completed" using drag-and-drop functionality.
Delete tasks by dragging them into a dedicated "Delete" drop zone.
### UI/UX Enhancements
Modern user interface built with Material-UI and styled using Tailwind CSS.

### Scalable Architecture

Fully modularized codebase for better maintainability and reusability.
Backend designed with RESTful APIs for efficient data handling.

### Best Practices

Adheres to industry standards in coding, error handling, and state management.
Professional handling of optional tasks.

### Technologies Used
#### Frontend:
React with TypeScript
react-beautiful-dnd for drag-and-drop functionality
Material-UI and Tailwind CSS for styling
#### Backend:
Node.js with Express
MongoDB as the database

### Installation
#### Clone the repository:


git clone https://github.com/coder0501/todo-app-drag-and-drop.git
cd mern-todo-app

#### Install dependencies:

#### For the backend:

cd server
npm install

#### For the frontend:

cd client
npm install
Start the application:

#### Backend:

cd server
npm start

#### Frontend:
bash

cd client
npm start

#### Visit the application in your browser:
http://localhost:3000
API Endpoints
Tasks
GET /tasks – Retrieve all tasks.
POST /tasks – Create a new task.
PUT /tasks/:id – Update a task's status.
DELETE /tasks/:id – Delete a task.

