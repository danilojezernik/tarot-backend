const express = require('express');
const db = require('../models');

const router = express.Router();

/* GET: Velika arkana */
router.route('/')

    /* GET users */
    .get((req, res) => {
        db.VelikaArkana.findAll().then((data) => res.json(data))
            .catch((err) => {
                res.status(404).send(err)
            })
    })

    /* CREATE user */
    .post((req, res) => {
        db.VelikaArkana.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => {
                res.status(404).send(err)
            })
    })

router.route('/:id')

    /* GET user */
    .get((req, res) => {
        db.VelikaArkana.findOne({where: {id: req.params.id}})
            .then((data) => res.json(data))
            .catch((err) => {
                res.status(404).send(err)
            });
    })

    /* UPDATE user */
    .post((req, res) => {
        db.VelikaArkana.update(req.body, {where: {id: req.params.id}})
            .then((data) => res.json(data))
    })

    /* DELETE user */
    .delete((req, res) => {
        db.VelikaArkana.destroy({where: {id: req.params.id}})
            .then((data) => res.json(data))
    })

module.exports = router;
