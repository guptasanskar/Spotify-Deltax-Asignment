const express = require('express');
const router = express.Router();

const AuthenticationController = require('../controllers/AuthenticationController');

const {Signup,Login}=AuthenticationController;

// signup route
router.post('/signup',Signup);
// login route
router.post('/login',Login);

module.exports=router;