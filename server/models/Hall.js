const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hallSchema = new Schema({
    title: {
        type: String
    },
    name: {
        type: String
    },
    file: {
        type: String
    },
    info: {
        type: String
    },
    url: {
        type: String
    }
}, {timestamps: true})

const Hall = mongoose.model('hall', hallSchema)
module.exports = Hall