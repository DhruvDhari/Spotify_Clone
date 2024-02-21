// import express from "express";
// import mongoose from "mongoose";
// import dotenv from"dotenv";
// dotenv.config();
//require is used when type=commom.js or before es6
const express =require("express");
const mongoose =require("mongoose");
require("dotenv").config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport");
const User=require("./models/User");
const authRoutes =require("./routes/auth");
const songRoutes=require("./routes/song");
const playlistRoutes=require("./routes/playlist");
const cors =require("cors");
const path = require("path");



const app =express();
const port=8000;

app.use(cors());

app.use(express.json());//this is used to tell ki req.body se joh bhi kuch aae,convert it into json


mongoose.connect("mongodb+srv://dmaster:"+process.env.MONGO_PASSWORD+"@cluster0.klv2gyk.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
).then((x)=>{
    console.log("Connected to Mongo !");
})
.catch((err)=>{
    console.log("Error while connecting to Mongo :",err);
});



// ============ deployment ================
const __dirname1=path.resolve();
console.log(__dirname1);
try{

    app.use(express.static(path.join(__dirname1,"../frontend/build"))) 
    console.log(path.join(__dirname1,"../frontend/build"))
    
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"../","frontend","build","index.html"))
    })
    console.log(path.resolve(__dirname1,"../","frontend","build","index.html"))
    
}catch{

    app.get('/',(req,res)=>{
        res.send("I am inside catch");
    })
}



// ============ deployment ================

app.use("/auth",authRoutes);
app.use("/song",songRoutes);
app.use("/playlist",playlistRoutes);

app.listen(port,()=>{
    console.log("App is running on port",port);
})


//setup passport


let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisKeyIsSupposedToBeSecret";

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));