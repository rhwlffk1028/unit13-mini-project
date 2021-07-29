const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Location.hasMany(Traveller)

module.exports = { Location, Traveller, Trip };