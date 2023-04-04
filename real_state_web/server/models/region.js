const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegionSchema = new Schema({
    _id: { type: String, required: true },
    numero: { type: String, required: true },
    nombre_region: { type: String, required: true },
    comunas: { type: String[25], required: true }
});

module.exports = mongoose.model('region', RegionSchema);