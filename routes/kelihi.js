const express = require('express');
const router = express.Router();

/* GET: Kelihi */
router.get('/', function (req, res, next) {
    res.send({title: 'Kelihi'});
});

module.exports = router;
