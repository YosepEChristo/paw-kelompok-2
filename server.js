const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = "mongodb+srv://dbUserTugas:Pass_db_User@paw-kelompok-2.wmcaw.mongodb.net/paw-kelompok-2?retryWrites=true&w=majority";

const Queue = require('./models/Queue');
const Patients = require('./models/Patients');

mongoose.connect(url,{useNewUrlParser:true});
