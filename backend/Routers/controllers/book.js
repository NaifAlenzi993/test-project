// const hotelsModel = require("../../db/models/hotelModel")

const bookModel = require("../../db/models/bookModel")


const addbook = async (req , res) => {
    const {name , startData , expiryData , hotel} = req.body;
    const user = req.token.userId
    const cours = new bookModel({name, startData, expiryData , user , hotel})
    try {
        const sav = await cours.save()
        const cour = await bookModel.find({}).populate("user").populate("hotel")
        res.status(200).json(cour)
    } catch (error) {
        res.status(403).json(error)
    }
}

const deletbook = async (req , res)=>{
    let id = req.params.id
    const userId = req.token.userId
        try {
            const deletej = await bookModel.findOneAndDelete({_id:id})
            const cour = await bookModel.find({}).populate("user").populate("hotel")
            res.status(200).json(cour)
        } catch (error) {
            res.status(403).json(error)
        }
}


const getbook = async (req , res)=>{
    try {
        const cour = await bookModel.find({}).populate("user").populate("hotel")
        res.status(200).json(cour)
    } catch (error) {
        
    }
   
}


module.exports = {addbook, getbook,deletbook}

