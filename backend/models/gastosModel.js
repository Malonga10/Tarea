const mongoose = require('mongoose');

const gastosSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Por favor teclea una descripción de; gasto']
    },

    importe: {
        type: String,
        required: [true, 'Por favor teclea el importe del gasto']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Gasto', gastosSchema)