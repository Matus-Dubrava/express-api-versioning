const express = require('express');

const api = express.Router();

api.get('/timezone', (req, res) => {
  res.json({
    desc: 'v2 timezone api',
    functionality: 'extended',
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth() + 1,
    cuttentDay: new Date().getDay()
  });
});

module.exports = api;
