const express = require('express');
const router = express.Router();
const {createReservation, getReservationsByUser} = require('../controllers/reservationController');

router.post('/reservations', createReservation);
router.get('/reservations/:userId', getReservationsByUser);

module.exports = router;
