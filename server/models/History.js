const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historySchema = new Schema({
        startDate: {
            type: Date,
            required: true
        },
        datesCompleted: {
            type: Array,
            required: true
        },
        challenge: {
            type: String,
            required: true
        },
        success: Boolean,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
})

module.exports = mongoose.model('History', historySchema)