const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const password = require("../middleware/password");
const limiter = require("../middleware/rateLimiter");

// définie routes
router.post("/signup", password, userCtrl.signup);
router.post("/login", limiter.limiter, userCtrl.login);

module.exports = router;
