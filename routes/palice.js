const express = require('express');
const router = express.Router();

/* GET: Palice */
router.get('/', function (req, res, next) {
    res.send({title: 'Palice'});
});

module.exports = router;
