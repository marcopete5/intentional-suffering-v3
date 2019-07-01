const express = require('express')
const app = express()
require('dotenv').config()
const port = 5000
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')


app.use(express.json())
app.use('/api', expressJwt({secret: process.env.SECRET}))

app.use('/auth', require('./routes/authRoutes.js'))
app.use('/api/options', require('./routes/optionRoutes.js'))
app.use('/api/deck', require('./routes/deckRoutes.js'))
app.use('/api/history', require('./routes/historyRoutes.js'))


mongoose.connect('mongodb://localhost:27017/intentional-suffering-v2', {useNewUrlParser: true})
    .then(()=> {
        console.log('connected to Mongoose')
    })
    .catch((err)=> {
        console.log({err})
    })


app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
});


app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})