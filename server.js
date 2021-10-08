const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("<h1>Working</h1>")
})
const port = process.env.PORT || 8080; 
app.listen(port,()=>{
    console.log(`listeing at ${port} `);
})