const express = require("express");
const  registerUser  = require('../controllers/User'); 

const router = express.Router();

router.post('/register',registerUser);

module.exports = router;
