const express = require('express');
const {
  getAllVentures,
  getFeaturedVentures,
  getVentureById,
} = require('../controllers/ventureController');

const router = express.Router();

router.get('/', getAllVentures);
router.get('/featured', getFeaturedVentures);
router.get('/:id', getVentureById);

module.exports = router;
