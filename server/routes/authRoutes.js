const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.route('/signup')

    .post((req, res, next) => {
        User.findOne({username: req.body.username}, (err, existingUser) => {
            // handle regular errors
            if(err) {
                res.status(500)
                return next(err)
            }

            // Check if username is taken
            if(existingUser !== null){
                res.status(400)
                return next(err)
            }

            // Create new User and save to database
            const newUser = new User(req.body)
            newUser.save((err, user) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }

                // Give user a token
                const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
                return res.status(200).send({success: true, user: user.withoutPassword(), token})
            })

        })
    })


router.route('/login')

    .post((req, res, next) => {
        console.log('hit here')
        User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!user){
                res.status(400)
                return next(new Error('Email or password are incorrect!'))
            }

            user.checkPassword(req.body.password, (err, match) => {
                if (err) return res.status(500).send(err);
                if (!match) res.status(401).send({ success: false, message: "Username or password are incorrect" });
                const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
                return res.send({ token: token, user: user.withoutPassword(), success: true })
            });
        })
    })


module.exports = router;