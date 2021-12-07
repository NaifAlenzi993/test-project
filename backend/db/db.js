const mongoose = require("mongoose");

mongoose.connect(`mongodb://user:123@cluster0-shard-00-00.buujk.mongodb.net:27017,cluster0-shard-00-01.buujk.mongodb.net:27017,cluster0-shard-00-02.buujk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-y9e36u-shard-0&authSource=admin&retryWrites=true&w=majority`).then(
    ()=>{
        console.log("mongodb Connected");
    }
).catch(
    (err)=>{
        console.log(err);
    }
)


