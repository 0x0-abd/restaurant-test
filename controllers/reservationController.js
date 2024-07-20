const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const reservation = new Reservation(req.body);
  try {
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getReservationsByUser = async (req, res) => {
  try {
    const reservations = await Reservation.find({ userId: req.params.userId });
    res.status(200).send(reservations);
  } catch (error) {
    res.status(400).send(error);
  }
};
