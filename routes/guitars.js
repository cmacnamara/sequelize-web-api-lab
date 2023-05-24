const router = require('express').Router()
const guitarsCtrl = require('../controllers/guitars.js')

router.post('/', guitarsCtrl.create)

router.get('/', guitarsCtrl.index)

router.put('/:guitarId', guitarsCtrl.update)

router.delete('/:guitarId', guitarsCtrl.delete)

module.exports = router