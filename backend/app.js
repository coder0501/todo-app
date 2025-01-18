const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// CORS configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Default to your frontend URL if not in .env
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware for all requests
app.options('*', cors(corsOptions)); // Enable preflight requests for all routes
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

module.exports = app;
