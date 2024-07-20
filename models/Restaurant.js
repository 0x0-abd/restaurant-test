const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  cuisine: { type: String, required: true },
  priceRange: { type: String, required: true },
  description: String,
  image: String,
  reviews: [String],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);