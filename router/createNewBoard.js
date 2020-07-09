const router    = require('express').Router();
const newBoard  = require('../controller/createNewBoard');


router.post('/newBoard/:id', newBoard.createNewBoard)
router.get('/newBoard', newBoard.getNewBoard)



module.exports = router
