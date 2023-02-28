const express = require('express');
const router = express.Router();

/* GET: Index */
router.get('/', function (req, res, next) {
    res.send({title: 'Index'});
});

module.exports = router;
