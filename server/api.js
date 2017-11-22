const express = require('express');
const router = express.Router();
const models = require('./models'); //db, Place, Hotel, Activity, Restaurant

router.get('/', (req, res, next) => {
    const hotels = models.Hotel.findAll();
    const activities = models.Activity.findAll();
    const restaurants = models.Restaurant.findAll();
    Promise.all([hotels, activities, restaurants])
        .then(([hotels, activities, restaurants]) => res.json({hotels, activities, restaurants}))
        .catch(next);
}) 

module.exports = router;