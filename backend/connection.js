const mongoose= require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(res=>{
    console.log("Database Successfully Connected")
}).catch(err=>{
    console.log(err)
})
