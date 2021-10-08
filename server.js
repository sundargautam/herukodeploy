const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("<h1>Working</h1>")
})
app.get("/mantra",(req,res)=>{
    res.json({
        msg:"never give up"
    })
})
const port = process.env.PORT || 8080; 
app.listen(port,()=>{
    console.log(`listeing at ${port} `);
})