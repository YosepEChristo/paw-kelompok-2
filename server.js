const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb+srv://dbUserTugas:Pass_db_User@paw-kelompok-2.wmcaw.mongodb.net/paw-kelompok-2?retryWrites=true&w=majority";

const Queue = require('./models/Queue');
const Patients = require('./models/Patients');

mongoose.connect(url,{useNewUrlParser:true})
    .then(res => console.log('Connected to DB'))
    .catch(err => console.log(err));

//Create localhost:3000
app.listen(3000);

//GET queue
app.get('/queue',async(req,res)=>{
    const queueItems = await Queue.find();
    res.send(queueItems);
});

//PUT queue
