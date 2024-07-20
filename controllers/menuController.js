const Menu = require('../models/Menu');

exports.createMenu = async (req, res) => {
  const menu = new Menu(req.body);
  try {
    await menu.save();
    res.status(201).send(menu);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMenuByRestaurant = async (req, res) => {
  try {
    const menu = await Menu.findOne({ restaurantId: req.params.restaurantId });
    if (!menu) {
      return res.status(404).send();
    }
    res.status(200).send(menu);
  } catch (error) {
    res.status(400).send(error);
  }
};
