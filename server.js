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

//POST queue
app.post('/queue',async(req,res)=>{
    var newQueue = new Queue(req.body)
    newQueue.save()
    .then(_id=>{
        res.send(_id)
    })
});


//PUT queue
app.put('/queue', (req,res)=>{
    console.log(req.body._id)
    updates = req.body
    Queue.findOneAndUpdate({_id:req.body._id}, updates, {new : true})
        .then(updatedPatients=>{
            res.send(updatedPatients)
        })
        .catch(err=>{
            res.send(err)
        })
})

//DELETE queue
app.delete('/queue', (req,res)=>{
    console.log(req.body.ownerName)
    Queue.findOneAndDelete({ownerName:req.body.ownerName})
        .then(res.send("Delete successful"))
        .catch(err=>{
            res.send(err)
        })
})


//GET patient
app.get('/patient',async(req,res)=>{
    const patientItems = await Patients.find();
    res.send(patientItems);
});

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

// PUT Patients
app.put('/patients',async(req,res)=>{
    const patientItems = await Patients.findOne({ownerName: req.body.ownerName})
    const update = await patientItems.update()
    .then(res.send("Update successful"))
    .catch(err=>{
        res.send(err)
    })
});



// DELETE Patients
app.delete('/patients', (req, res) => {
    const patientItems = await Patients.findOne({ ownerName: req.body.ownerName })
    const deleted = await patientItems.remove()
    .then(res.send("Delete successful"))
    .catch(err=>{
        res.send(err)
    })
})
