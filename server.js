const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const url = "mongodb+srv://dbUserTugas:Pass_db_User@paw-kelompok-2.wmcaw.mongodb.net/paw-kelompok-2?retryWrites=true&w=majority";

const Queue = require('./models/Queue');
const Patients = require('./models/Patients');

app.use(bodyParser.json());
app.use(cors())

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
app.put('/patients', (req,res)=>{
    console.log(req.body._id)
    updates = req.body
    Patients.findOneAndUpdate({_id:req.body._id}, updates, {new : true})
        .then(updatedPatients=>{res.send(updatedPatients)})
        .catch(err=>{res.send(err)})
})

// POST Patients
app.post('/patients', (req,res)=>{
    var newPatients = new Patients(req.body)
    newPatients.save()
        .then(item => {
            res.send(item)
        })
        .catch(err =>{
            res.send(err)
        });
})