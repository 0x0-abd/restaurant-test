const Restaurant = require('../models/Restaurant');

exports.createRestaurant = async (req, res) => {
  const restaurant = new Restaurant(req.body);
  try {
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).send(restaurants);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send();
    }
    res.status(200).send(restaurant);
  } catch (error) {
    res.status(400).send(error);
  }
};
