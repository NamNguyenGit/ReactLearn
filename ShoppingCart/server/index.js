const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.use(express.json());


mongoose.connect("mongodb://localhost:27017/CutHairShop",{useNewUrlParser: true} ,(err)=>{
    if(!err) console.log('db connected');
    else console.log('dberror');
})

const ServiceSchema = new mongoose.Schema({
    serviceName:{
        type: String,
        required: true,
    },
    servicePrice:{
        type: Number,
        required: true,
    },
});

const newModel = new mongoose.model("Service",ServiceSchema);
// const data = new newModel({
//     serviceName:'undercut',servicePrice:10000
// });
// data.save();

const data = async()=>{
    const result = await newModel.insertMany([{
        serviceName:'shortcriff',servicePrice:10000
    },{
        serviceName:'clippercut',servicePrice:10000
    },
    {
        serviceName:'longtaper',servicePrice:10000
    },
    {
        serviceName:'bob',servicePrice:10000
    }]);
    console.log(result);
    }
    data();

// app.get("/", async (req,res)=>{
//     const service = new ServiceModel({ serviceName:"Undercute",servicePrice: 100000});

//     try{
//         await service.save();
//     }catch(err){
//         console.log(err)
//     }

// });


app.listen(3001,()=>{
    console.log("Server running");
});