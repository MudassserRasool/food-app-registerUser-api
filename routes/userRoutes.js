// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// User Registration
router.post('/register', UserController.registerUser);

module.exports = router;
