const express = require('express');

const api = express.Router();

api.get('/timezone', (req, res) => {
  res.json({
    desc: 'v1 timezone api',
    functionality: 'basic',
    currentYear: new Date().getFullYear()
  });
});

module.exports = api;
