const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// CORS configuration
// const corsOptions = {
//     origin: process.env.FRONTEND_URL,  // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// };

app.use(cors());
// Middleware
// app.options('*', cors(corsOptions)); // Enable preflight requests
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

module.exports = app;
