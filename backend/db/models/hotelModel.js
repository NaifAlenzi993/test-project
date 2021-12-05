const mongoose = require ("mongoose")

const hotelsModel = new mongoose.Schema({
    name: { type : String },
    description: { type : String },
    img: {type : String},
    rate: {type: Number},
    price: {type:Number},
    user: {type:mongoose.Schema.ObjectId, ref:"userModel"},
});

module.exports = mongoose.model("hotelsModel", hotelsModel)