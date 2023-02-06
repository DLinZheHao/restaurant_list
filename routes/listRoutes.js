const express = require('express');
const router = express.Router();

const ListController = require('../controllers/listController');

router.route('/restaurants').post(ListController.add_restaurant);
router.route('/restaurant/:id').delete(ListController.delete_restaurant);
module.exports = router;
