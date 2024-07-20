const express = require('express');
const router = express.Router();
const {createRestaurant, getRestaurants, getRestaurant} = require('../controllers/restaurantController');

router.post('/restaurants', createRestaurant);
router.get('/restaurants', getRestaurants);
router.get('/restaurants/:id', getRestaurant);

module.exports = router;
