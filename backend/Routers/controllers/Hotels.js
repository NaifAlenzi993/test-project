const hotelsModel = require("../../db/models/hotelModel")

const bookSelect = async (req , res) => {
    const id = req.params.id;
    try {
        const cour = await hotelsModel.find({_id : id}).populate("user")
        res.status(200).json(cour)
    } catch (error) {
        console.log(error);
    }
}

const addhotel =  async (req , res)=>{
        const {name , description , img} = req.body;
        const rate = 5
        const user = req.token.userId
        const cours = new hotelsModel({name, description, img , rate , user})
        try {
            const sav = await cours.save()
            const cour = await hotelsModel.find({}).populate("user")
            res.status(200).json(cour)
        } catch (error) {
            res.status(403).json(error)
        }
        
    }

const deletehotel = async (req , res)=>{
        let id = req.params.id
        const userId = req.token.userId
        // console.log(req.token.userId);
        // console.log(id);

        console.log(userId);
     
            try {
                const deletej = await hotelsModel.findOneAndDelete({_id:id,user:userId})
                const cour = await hotelsModel.find({}).populate("user")
                res.status(200).json(cour)
            } catch (error) {
                res.status(403).json(error)
            }
    
        
    }


const gethotel = async (req , res)=>{
        try {
            const cour = await hotelsModel.find({}).populate("user")
            res.status(200).json(cour)
        } catch (error) {
            
        }
       
    }

    const updatehotel = async (req , res) => {
            const {idold , name , description , img} = req.body;
            try {
                let courUpdate = name && await hotelsModel.findByIdAndUpdate({_id: idold} , {name})
                 courUpdate = description && await hotelsModel.findByIdAndUpdate({_id: idold} , {description})
                 courUpdate = img && await hotelsModel.findByIdAndUpdate({_id: idold} , {img})
                const cours = await hotelsModel.find({})
                res.status(200).json(cours)
            } catch (error) {
                res.status(403).json(error)
            }
        
        }


    const deleteAll = async (req , res)=>{
           
             try {
                const deletej = await hotelsModel.remove()
                const cour = await hotelsModel.find({})
                res.status(200).json(cour)
            } catch (error) {
                res.status(403).json(error)
            }
            }




    module.exports = {addhotel , deletehotel  , gethotel , updatehotel , deleteAll , bookSelect}