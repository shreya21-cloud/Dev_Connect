const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const postRoutes = require('../routes/postroutes');

app.use(cors());

app.get('/',(req, res )=>{
res.send('hellooooo');
});

app.use('/posts', postRoutes);
module.exports = app;