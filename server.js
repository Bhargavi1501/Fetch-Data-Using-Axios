//import express
const exp = require("express");
const app = exp();

app.use(exp.json())

//import express-async-handler
const errHandler = require("express-async-handler");

//import dotenv
require("dotenv").config;

//import axios
const axios = require("axios");

//import path module
const path = require("path");

app.use(exp.static(path.join(__dirname,"dist/NewTask")));

//get req handler
app.get("/getData" ,errHandler(async(req,res,next)=>{

    let population =  await axios.get("http://universities.hipolabs.com/search?country=United+States")

    //console.log(population.data);
    let data = population.data;
    res.send({message:data});
}))

//assign port
port = process.env.port;
app.listen(port, ()=>{console.log(`Web server started at ${port}..`)})