const express = require('express');
const messages = require('../messages');

const router = express.Router();

router.get('/new', (req, res) => {
  res.render('newmessage');
});

router.post('/new', (req, res) => {
  const { user, text } = req.body;

  if (!user || !text) {
    return res.status(400).send("Both user and message are required.");
  }

  messages.push({
    user,
    text,
    added: new Date()
  });

  res.redirect('/');
});

module.exports = router;
