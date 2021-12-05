const mongoose = require ("mongoose")

const bookModel = new mongoose.Schema({
    name: { type : String },
    startData: { type : Number },
    expiryData: {type : Number},
  user: {type:mongoose.Schema.ObjectId, ref:"userModel"},
});

module.exports = mongoose.model("bookModel", bookModel)