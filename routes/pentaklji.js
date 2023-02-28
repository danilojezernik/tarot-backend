const express = require('express');
const router = express.Router();

/* GET: Pentaklji */
router.get('/', function (req, res, next) {
    res.send({title: 'Pentaklji'});
});

module.exports = router;
