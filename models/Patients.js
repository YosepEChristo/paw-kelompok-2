const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patients = new Schema({
    ownerName: String,
    petName: String,
    petType: String,
    homeAddress: String,
    phoneNumber: String,
    description: String,
    currentTreatments: Array
},{
    collection : 'patients'
});

module.exports = mongoose.model('Patients',patients);