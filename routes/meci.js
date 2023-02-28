const express = require('express');
const router = express.Router();

/* GET: Meči */
router.get('/', function (req, res, next) {
    res.send({title: 'Meči'});
});

module.exports = router;
