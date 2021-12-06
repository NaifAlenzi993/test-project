const express = require("express")
const cors = require("cors")

require("./db/db");

const hotelsModel = require("./db/models/hotelModel")

const app = express()
app.use(express.json());
app.use(cors());
const port = 5000
///////////

const hotelRoute = require("./Routers/routes/hotelRoute")
const signUpRoute = require("./Routers/routes/signUpRoute")
const loginRoute  = require("./Routers/routes/loginRoute")
const  userRoute = require("./Routers/routes/userRoute")
const bookRoute = require("./Routers/routes/bookRoute")
app.use(hotelRoute)
app.use(signUpRoute)
app.use(loginRoute)
app.use(userRoute)
app.use(bookRoute)

///////////
app.listen( port , ()=>{
    console.log("server is runing on Port : " + port);
})



// app.get("/" , (req , res)=>{
//     res.status(200).json("hello")
// })

// app.get("/hotel" , async (req , res)=>{
//     try {
//         const cour = await hotelsModel.find({})
//         res.status(200).json(cour)
//     } catch (error) {
        
//     }
   
// })

// app.post("/hotel" , async (req , res)=>{
//     const {name , description , img} = req.body;
//     const cours = new hotelsModel({name, description, img})
//     try {
//         const sav = await cours.save()
//         const cour = await hotelsModel.find({})
//         res.status(200).json(cour)
//     } catch (error) {
//         res.status(403).json(error)
//     }
    
// })


// app.delete("/hotel/:id" ,async (req , res)=>{
//     let id = req.params.id
    
//     try {
//         const deletej = await hotelsModel.deleteOne({_id : id})
//         const cour = await hotelsModel.find({})
//         res.status(200).json(cour)
//     } catch (error) {
//         res.status(403).json(error)
//     }
// })

// app.delete("/deleteAll" ,async (req , res)=>{
//     console.log("sjkfhs");
//     try {
//         const deletej = await hotelsModel.remove()
//         const cour = await hotelsModel.find({})
//         res.status(200).json(cour)
//     } catch (error) {
//         res.status(403).json(error)
//     }
// })

// app.put("/hotel" , async (req , res) => {
//     const {idold , name , description , img} = req.body;
    
//     try {
//         let courUpdate = name && await hotelsModel.findByIdAndUpdate({_id: idold} , {name})
//          courUpdate = description && await hotelsModel.findByIdAndUpdate({_id: idold} , {description})
//          courUpdate = img && await hotelsModel.findByIdAndUpdate({_id: idold} , {img})
//         const cours = await hotelsModel.find({})
//         res.status(200).json(cours)
//     } catch (error) {
//         res.status(403).json(error)
//     }

// })

