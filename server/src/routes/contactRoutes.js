const express = require('express');
const { createContact } = require('../controllers/contactController');
const { validateContact, handleValidationErrors } = require('../middleware/validation');
const { contactLimiter } = require('../middleware/security');

const router = express.Router();

router.post(
  '/',
  contactLimiter,
  validateContact,
  handleValidationErrors,
  createContact
);

module.exports = router;
