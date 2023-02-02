const express = require('express');
const router = express.Router();

const viewController = require('../controllers/viewController');

router.get('/', viewController.index_page);
router.get('/restaurants/:id', viewController.show_page);
router.get('/search', viewController.search_page);

module.exports = router;
