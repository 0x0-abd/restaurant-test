const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    menuItemId: { type: Schema.Types.ObjectId, ref: 'Menu.items', required: true },
    quantity: { type: Number, required: true },
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' },
  deliveryAddress: String,
});

module.exports = mongoose.model('Order', OrderSchema);