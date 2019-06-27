const express = require('express')
const deckRouter = express.Router()
const Deck = require('../models/Deck')

deckRouter.route('/')

    .get((req, res) => {
        Deck.find({category: req.query.category}, (err, decks) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(decks)
        })
    })

    .post((req,res) => {
        const newDeck = new Deck(req.body)
        newDeck.user = req.user._id
        newDeck.save((err, deck) => {
            if(err) {
                return res.status(500).send(err)
            }
            return res.status(200).send(deck)
        })
    })

module.exports = deckRouter