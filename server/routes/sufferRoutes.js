const express = require('express')
const router = express.Router()
const Option = require('../models/Option')

router.route('/')

    .get((req, res) => {
        Option.find((err, option) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(option)
        })
    })

    .post((req, res) => {
        const newOption = new Option(req.body)
        console.log(req.user)
        console.log(req.deck)
        newOption.save(err => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(newOption)
        })
    })

module.exports = router