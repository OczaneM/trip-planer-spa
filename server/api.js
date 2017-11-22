const express = require('express');
const router = express.Router();
const {Place,Restaurant, Activity, Hotel} = require('./models') //db, Place, Hotel, Activity, Restaurant

router.get('/', (req, res, next) => {

    const hotels = Hotel.findAll({include: [{model: Place}]});
    const activities = Activity.findAll({include: [{model: Place}]});
    const restaurants = Restaurant.findAll({include: [{model: Place}]});
    Promise.all([hotels, activities, restaurants])
        .then(([hotels, activities, restaurants]) => res.json({hotels, activities, restaurants}))
        .catch(next);
})



module.exports = router;
