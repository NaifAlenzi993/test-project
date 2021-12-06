
const express = require("express");
const hotelRoute = express.Router();


// const { authentication } = require("../middleware/authentication");
const {addhotel , deletehotel  , gethotel , updatehotel , deleteAll , bookSelect} = require("../controllers/Hotels");

const {authentication} = require("../middleware/authentication")

const {addbook } = require("../controllers/book");


hotelRoute.get("/hotel" ,authentication, gethotel);
hotelRoute.post("/hotel" ,authentication , addhotel);
hotelRoute.delete("/hotel/:id", authentication ,deletehotel);
hotelRoute.delete("/deleteAll", deleteAll);
hotelRoute.put("/hotel", updatehotel);

hotelRoute.get("/bookselect/:id" ,authentication, bookSelect);



module.exports = hotelRoute;
