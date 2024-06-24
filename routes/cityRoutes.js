const express = require('express');
const cityController = require('./../controllers/cityController');

const router = express.Router();

router
    .route('/')
    .post(cityController.createCity);

router
    .route('/:name')
    .get(cityController.getCity)

router
    .route('/state/:state')
    .get(cityController.getCityState)


module.exports = router;