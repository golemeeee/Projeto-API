const express = require('express');
const clientController = require('./../controllers/clientController');

const router = express.Router();

router
    .route('/')
    .post(clientController.createClient);

router
    .route('/:name')
    .get(clientController.getClient)

router
    .route('/find/:id')
    .get(clientController.getClientID)

router
    .route('/delete/:id')
    .delete(clientController.deleteClient)

router
    .route('/update/:id')
    .patch(clientController.updateClient)

module.exports = router;