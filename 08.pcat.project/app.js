const express = require('express');
const path = require('path');
const cors = require('cors');
const port = 3000;

const app = express();


app.use(cors());
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
})
app.get("/index.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/index.html'))
})
app.get("/about.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/about.html'))
})
app.get("/contact.html",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'temp/contact.html'))
})


app.listen(port,console.log(`server ${port}'unda başlatıldı`));