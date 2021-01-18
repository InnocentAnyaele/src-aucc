const Src = require('../models/Src')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const e = require('express')

const register = (req, res, next) => {
    // console.log(req.body.password)
    // console.log(req.body.username)
    bycrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            return res.send("can't hash error")
        }

        let src = new Src ({
            username: req.body.username,
            password: hashedPass
        })
    
        src.save()
        .then(src => {
            res.json({
                message: 'Src has been added'
            })
        .catch(error => {
            res.status(400).send(error)
        })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    Src.findOne({$or: [{username:username}]})
    .then(src => {
        if(src){
            bycrypt.compare(password, src.password, function(err, result){
                if(err) {
                    res.json({
                        error: err,
                        message: 'Something went wrong! Try again later'
                    })
                    // res.status(400).send('no user exists in db to update')
                }
                if(result){
                    let token = jwt.sign({name: src.username}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful',
                        token: token,
                        auth: true
                    })
                } else {
                    res.json({
                        message: 'Wrong password',
                    })
                }
            })
        } else {
            res.json({
                message: 'No user found'
            })
        }
    })
}

const changePassword = (req, res, next) => {
   const password = req.body.password
   const username = "src"
    bycrypt.hash(password, 10, function (err, hashedPass) {
        if(err){
            res.status(500).send(err)
        }
        Src.findOneAndUpdate({username: username}, {password: hashedPass})
        .then(()=>{
            res.status(200).send()
        })
        .catch((err)=> {
            // console.log(err)
            res.status(400).send(err)
        })
    })
}


module.exports = {
    register, login, changePassword
}