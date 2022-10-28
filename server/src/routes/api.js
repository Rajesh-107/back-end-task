const express = require('express');
const UsersController = require("../controllers/UsersController")

const router = express.Router();

router.post("/registration", UsersController.registartion)
router.post("/login", UsersController.UserLogin)

module.exports = router;