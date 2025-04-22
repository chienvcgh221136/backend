const express = require('express');
const cors = require('cors'); // Import CORS middleware
const mongoose = require('mongoose');

const app = express();

// Enable CORS
app.use(cors({
    origin: 'http://localhost:5173', // Allow only this frontend origin to access the API
    methods: 'GET,POST,PUT,DELETE',  // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization' // Allowed request headers
}));

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection string (local)
const db = "mongodb://localhost:27017/phone-data";

// Connect to MongoDB using Mongoose
mongoose.connect(db)
    .then(() => console.log('success!')) // Connection successful
    .catch((err) => console.error('MongoDB connection error:', err)); // Handle connection errors

// Import and use routes
const router = require('./api/routes/iPhoneRoute'); 
router(app); // Register routes by calling the exported function

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});
