const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deckSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    deckName: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

})

module.exports = mongoose.model('Deck', deckSchema)