const mongoose = require('mongoose');
const { Schema } = mongoose;

 const ContactSchema = new Schema({
    name: { type: String },
    email: { type: String },
    description: { type: String }
});

module.exports =  mongoose.model('contact', ContactSchema);