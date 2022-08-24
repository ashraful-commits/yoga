const path = require('path');
const url = require('url');
const express = require('express');
const {
  Homepageshow,
  aboutpageshow,
  classespageshow,
  pricingpageshow,
  yogapageshow,
  contactpageshow,
  resultpageshow,
} = require('../controllers/pageController');
const router = express.Router();

router.get('/', Homepageshow);
router.get('/home', Homepageshow);
router.get('/about', aboutpageshow);
router.get('/classes', classespageshow);
router.get('/pricing', pricingpageshow);
router.get('/yoga', yogapageshow);
router.get('/contact', contactpageshow);
router.post('/result', resultpageshow);

module.exports = router;
