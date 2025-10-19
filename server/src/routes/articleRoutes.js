const express = require('express');
const {
  getAllArticles,
  getArticleBySlug,
} = require('../controllers/articleController');

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:slug', getArticleBySlug);

module.exports = router;
