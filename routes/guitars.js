const router = require('express').Router()
const guitarsCtrl = require('../controllers/guitars.js')

router.post('/', guitarsCtrl.create)

router.get('/', guitarsCtrl.index)

router.put('/', guitarsCtrl.update)

router.delete('/', guitarsCtrl.delete)

module.exports = router