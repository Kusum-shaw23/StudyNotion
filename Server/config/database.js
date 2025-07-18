const mongoose =reuire("mongoose");
require("dotenv").config();

exports.connect= () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })

    .then(() =>console.log("DB Connection Sucessfully"))
    .cath((error) =>{
        console.log("DB Connection Failed");
        console.log(error);
        process.exit(1);
    })
};