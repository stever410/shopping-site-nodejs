const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const {checkAuthenticated, checkNotAuthenticated} = require('../config/auth');

router.post('/login', checkNotAuthenticated, userController.login);
router.post('/register', checkNotAuthenticated, userController.register);
router.post('/logout', checkAuthenticated, userController.logout);

module.exports = router;