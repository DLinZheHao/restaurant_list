const express = require('express');
const router = express.Router();

const viewController = require('../controllers/viewController');

router.get('/', viewController.index_page);
router.get('/restaurants/:id', viewController.show_page);
router.get('/search', viewController.search_page);
router.get('/add_page', viewController.add_page);
router.get('/restaurants/:id/edit', viewController.edit_page);
module.exports = router;
