const express = require('express');
const internController = require('../controllers/intenController');
const userController = require('../controllers/userController');

const routers = express.Router();
routers.get('/getintern',internController.getIntern);
routers.get('/getallinterns',internController.getAllIntern);
routers.post('/createintern',userController.createUser);

module.exports = routers;