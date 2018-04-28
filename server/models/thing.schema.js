const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThingSchema = new Schema({
    name: {type: String, required: true},
    complete: {type: Boolean}

});

module.exports = mongoose.model('thing', ThingSchema);