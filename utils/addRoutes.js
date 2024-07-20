const restaurantRoutes = require('../routes/restaurantRoutes');
const menuRoutes = require('../routes/menuRoutes');
const reservationRoutes = require('../routes/reservationRoutes');
const orderRoutes = require('../routes/orderRoutes');
const userRoutes = require('../routes/userRoutes');

const addRoutes = (pre, app) => {
    app.use(`${pre}`, restaurantRoutes);
    app.use(`${pre}`, menuRoutes);
    app.use(`${pre}`, reservationRoutes);
    app.use(`${pre}`, orderRoutes);
    app.use(`${pre}`, userRoutes);
}

module.exports = addRoutes;