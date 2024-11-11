const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Category schema
const CategorySchema = new Schema({
    name: { type: String, required: true }
});

// Define the Product schema
const ProductSchema = new Schema({
    name: { type: String, required: true },
    adjective: { type: String, required: true },
    description: { type: String, required: true }, // Corrected spelling
    price: { type: String, required: true },
    category: { type: String, required: true },
});

// Export the Product model
module.exports = mongoose.model('Product', ProductSchema);
