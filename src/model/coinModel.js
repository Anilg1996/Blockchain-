const mongoose = require("mongoose")

const cryptoModel = new mongoose.Schema({
    Symbol : {
        type:String,
        unique:true
    },
    name : {
        type: String,
        unique:true
    }, 
    marketCapUsd:{
        type: String
    },
    priceUsd: {
        type: String
    },
},{timestamps:true})
module.exports = mongoose.model('Crypto', cryptoModel)