const mongoose = require('mongoose');

const { Schema } = mongoose;

 const RoomSchema = new Schema({
    banio_compartido: { type: Boolean },
    descripcion: { type: String },
    fecha_publicacion: { type: Date },
    region: {type: String},
    ciudad: {type: String},
    comuna: {type: String},
    calle: {type: String},
    numero: {type: String},
    casa_depto: {type: Boolean},
    precio: {type: Number},
});

module.exports =  mongoose.model('room', RoomSchema);