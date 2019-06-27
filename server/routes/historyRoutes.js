const express = require('express')
const router = express.Router()
const History = require('../models/History')

router.route('/')

    .get((req,res) => {
        History.find({user: req.user._id}, (err, item) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(item)
        })
    })

    .post((req, res) => {
        const newHistory = new History(req.body)
        newHistory.user = req.user._id
        newHistory.save(err => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(newHistory)
        })
    })


module.exports = router