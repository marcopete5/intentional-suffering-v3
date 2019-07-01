const express = require('express')
const router = express.Router()
const Option = require('../models/Option')

router.route('/')

    .get((req, res) => {
        Option.find({deck: req.query.deck}, (err, option) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(option)
        })
    })

    .post((req, res) => {
        const newOption = new Option(req.body)
        newOption.user = req.user._id
        newOption.save(err => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(newOption)
        })
    })

module.exports = router