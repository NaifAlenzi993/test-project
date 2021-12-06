const mongoose = require ("mongoose")

const bookModel = new mongoose.Schema({
    name: { type : String },
    startData: { type : String },
    expiryData: {type : String},
    user: {type:mongoose.Schema.ObjectId, ref:"userModel"},
    hotel: {type:mongoose.Schema.ObjectId, ref:"hotelsModel"},
});

module.exports = mongoose.model("bookModel", bookModel)