const router = require('express').Router();
const locationsRoutes = require('./locationsRoutes');
const travellerRoutes = require('./travellerRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/locations', locationsRoutes);
router.use('/travellers', travellerRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;