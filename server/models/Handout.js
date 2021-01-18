const mongoose = require('mongoose')
const Schema = mongoose.Schema

const handoutSchema = new Schema({
    title: {
        type: String
    },
    file: {
        type: String
    }
}, {timestamps: true})

const Handout = mongoose.model('handout', handoutSchema)
module.exports = Handout