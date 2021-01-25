const Hall = require('../models/Hall')

const addHall = (req,res,next) => {
// console.log(req.body.name)
// console.log(req.body.title)
// console.log(req.body.url)
// console.log(req.body.info)
// console.log(req.files.file)

const title = req.body.title
const name = req.body.name
const filename = req.body.fileName
const url = req.body.url
const info = req.body.info

// console.log(filename)

let hall = new Hall ({
    title: title,
    name: name,
    file: filename,
    info: info,
    url: url
})
hall.save()
.then(() => {
    res.json({message: 'Hall added successfully'})
})
.catch((err) => {
    res.status(400).send(err)
})
}

const getHall = (req, res, next) => {
    Hall.find().sort( {createdAt: -1})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
}

const deleteHall = (req, res, next) => {
    Hall.findOneAndDelete({_id: req.params.id}, function(err, result){
        if (err) {
            res.status(500).send(err)
        }
        if (result) {
            res.status(200).send()
        }
    })
}

const searchHall = (req, res, next) => {
    Hall.find({title:{ $regex: req.params.id}}, function(err, result) {
        if(err) {
            res.status(500).send(err)
        }
        if(result) {
            res.json(result)
        }
     })
}

module.exports = {
    addHall, getHall, deleteHall, searchHall
}