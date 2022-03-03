const express = require('express');
const path = require('path');
const cors = require('cors');
const ejs = require('ejs');
const port = 3000;

const app = express();


app.use(cors());
app.use(express.static('public'));
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'temp/index.html'))
    res.render('index')
})
app.get("/index",(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'temp/index.html'))
    res.render('index')
})
app.get("/abou",(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'temp/about.html'))
    res.render('about')
})
app.get("/add",(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'temp/contact.html'))
    res.render('add')
})

app.get("/videos",(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'temp/contact.html'))
    res.render('video')
})


app.listen(port,console.log(`server ${port}'unda başlatildi`));