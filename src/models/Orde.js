const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    number: {
        type: String,
        required: true
    },
    createData: {
        type: Date,
        required: true,
        default: Date.now()
    },
    stutus: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created'
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    items: {
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    }
    })



module.exports = mongoose.model('order', schema)