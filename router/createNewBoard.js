const router    = require('express').Router();
const newBoard  = require('../controller/createNewBoard');


router.delete('/newBoard/:id', newBoard.deleteBoard)

router.post('/newBoard/:id', newBoard.createNewBoard)
router.patch('/newBoard/', newBoard.createInsideBoard)

router.get('/newBoard/:id', newBoard.getInsideBoard)
router.get('/newBoard', newBoard.getNewBoard)



module.exports = router
