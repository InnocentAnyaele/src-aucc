const Student = require('../models/Student')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bycrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let student = new Student ({
            username: req.body.username,
            password: hashedPass
        })
    
        student.save()
        .then(student => {
            res.json({
                message: 'Student has been added'
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

    Student.findOne({$or: [{username:username}]})
    .then(student => {
        if(student){
            bycrypt.compare(password, student.password, function(err, result){
                if(err) {
                    res.json({
                        error: err,
                        message: 'Something went wrong try again later'
                    })
                }
                if(result){
                    let token = jwt.sign({name: student.username}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful',
                        token: token,
                        auth: true
                    })
                } else {
                    res.json({
                        message: 'Wrong password'
                    })
                }
            })
        } else {
            res.json({
                message: 'No student found'
            })
        }
    })
}

const changePassword = (req, res, next) => {
    const password = req.body.password
    const username = "student"
     bycrypt.hash(password, 10, function (err, hashedPass) {
         if(err){
             res.status(500).send(err)
         }
         Student.findOneAndUpdate({username: username}, {password: hashedPass})
         .then(()=>{
             res.status(200).send()
         })
         .catch((err)=> {
             console.log(err)
             res.status(400).send(err)
         })
     })
 }
 

module.exports = {
    register, login, changePassword
}