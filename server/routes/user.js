const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/getUsers', userController.getUsers);
 
router.post('/signup', userController.createNewUser);
router.post('/login', userController.authenicateUser);
 
module.exports = router;