const mongoose = require('mongoose')
const Schema = mongoose.Schema

const optionSchema = new Schema({
    challenge: {
        type: String,
        required: true
    },
    timeToComplete: {
        type: String,
        required: true
    },
    current: {
        type: Boolean,
        default: false
    },
    deck: {
        type: Schema.Types.ObjectId,
        ref: "Deck",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model("Option", optionSchema)