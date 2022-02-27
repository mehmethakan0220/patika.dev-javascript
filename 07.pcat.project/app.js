const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.use(cors());


app.get("/",(req,res)=>{
    res.send(blog);
})



app.listen(PORT,console.log(`listening on ${PORT}`));