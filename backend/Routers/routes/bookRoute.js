const express = require("express");
const bookRoute = express.Router();

const {authentication} = require("../middleware/authentication")

const { addbook ,getbook,deletbook } = require("../controllers/book");

bookRoute.delete("/book/:id" ,authentication , deletbook);

bookRoute.post("/book" ,authentication , addbook);

bookRoute.get("/book" ,authentication , getbook);


module.exports = bookRoute;