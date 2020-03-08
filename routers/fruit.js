const router = require('express').Router()
const FruitController = require('../controllers/furit')

// GET
router.get('/', FruitController.getAllFuritController)

// Condition
router.get('/con', FruitController.FuritC)

router.get('/con1',FruitController.Furit2)

// POST
router.post('/',FruitController.postAllFuritController)

// GET
router.get('/:id',FruitController.getSingleFuritController)

// delete
router.delete('/:id', FruitController.deleteFurit)

//PUT
router.patch('/:id',FruitController.editFurit)
module.exports = router