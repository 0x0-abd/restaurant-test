const express = require('express');
const router = express.Router();
const { createMenu, getMenuByRestaurant} = require('../controllers/menuController');

router.post('/menus', createMenu);
router.get('/menus/:restaurantId', getMenuByRestaurant);

module.exports = router;