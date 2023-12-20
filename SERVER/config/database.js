const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Connection successful.");
    })
    .catch((error)=>{
        console.log("Error in connection.");
        console.error(error);
        process.exit(1);
    })
}

