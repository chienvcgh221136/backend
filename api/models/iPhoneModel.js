const mongoose = require('mongoose');

// Define the schema for iPhone documents
const iPhoneSchema = new mongoose.Schema({
    model: { type: String, required: true },        // iPhone model name (e.g., iPhone 14)
    storage: { type: Number, required: true },      // Storage capacity in GB
    price: { type: Number, required: true },        // Price of the iPhone
    color: { type: String, required: true },        // Color of the iPhone
    image: { type: String, required: true },        // Image URL of the iPhone
    releaseDate: { type: String, required: true }   // Release date (can also be Date type if needed)
}, { versionKey: false }); // Disable the __v version key

// Export the model (collection name will be 'iphone')
module.exports = mongoose.model('iPhone', iPhoneSchema, 'iphone');
