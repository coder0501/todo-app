const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;

//Listening on PORT no.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
