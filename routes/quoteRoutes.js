const express = require('express');
const Quote = require('../models/quote');
const router = express.Router();

// Get a random quote
router.get('/random', async (req, res) => {
  const count = await Quote.countDocuments();
  const random = Math.floor(Math.random() * count);
  const quote = await Quote.findOne().skip(random);
  res.json(quote);
});

// Search quotes by author
router.get('/search', async (req, res) => {
  const author = req.query.author;
  const quotes = await Quote.find({ author: new RegExp(author, 'i') });
  res.json(quotes);
});

module.exports = router;
