const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String
  }]
});

module.exports = mongoose.model('Menu', MenuSchema);