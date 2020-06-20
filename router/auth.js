const router    = require('express').Router();
const checkAuth = require('../middleware/auth');
const auth      = require('../controller/auth');
const dashboard = require("../controller/dashboard");

router.get('/'          , checkAuth.checkAuth, dashboard.home)
router.post('/register' , auth.register)
router.post('/login'    , auth.login)

module.exports = router