//const { response } = require('express');

const mongoose = require('mongoose');
const { Schema } = mongoose;

 const FaqSchema = new Schema({
    question: { type: String },
    response: { type: String }
});

module.exports =  mongoose.model('faq', FaqSchema);