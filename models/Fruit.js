const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FruitSchema = new Schema({
    fruitname: {
        type: String,
        trim: true,
        required: true,
        minlength: 4
    },
    furitamount: {
        type: Number,
        trim: true,
        required: true,
    },
})

//model
const Fruit = mongoose.model('Fruit', FruitSchema)
module.exports = Fruit