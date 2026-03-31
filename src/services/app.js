const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/',(req, res )=>{
res.send('hellooooo');
});

app.get("/posts",(req, res)=>{
    res.send("ye le saare blogs ki list");
});

app.post("/posts",(req, res)=>{
    res.send("ja krdiya post!");
});
app.get("/post/:id",(req, res)=>{
    res.send("ye lo yeh waale poora blog");
});

module.exports = app;