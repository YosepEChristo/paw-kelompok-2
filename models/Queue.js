const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const queueItems = new Schema({
    date: Date,
    time: String,
    ownerName: String,
    petName: String,
    petType: String,
    homeAddress: String,
    phoneNumber: String
},{
    collection : 'queues'
});

module.exports = mongoose.model('Queue',queueItems);