const router = require('express').Router();
const auth = require('../controller/auth');

router.post('/register', auth.postRegister)

module.exports = router