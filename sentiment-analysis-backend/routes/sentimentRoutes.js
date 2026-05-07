const express = require('express');
const { analyze } = require('../controllers/sentimentController'); // Corrected import to match the exported function name

const router = express.Router();

router.post('/analyze', analyze);

module.exports = router;
