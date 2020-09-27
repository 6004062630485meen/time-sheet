const express = require('express');

const timeSheet = require('../data');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs', {
        timeSheet
    });
});

module.exports = router;