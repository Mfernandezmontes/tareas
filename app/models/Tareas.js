/**
 * Created by adminlocal on 26/12/2015.
 */
var mongoose = require('mongoose')

var TareaSchema = new mongoose.Schema({
    nombre: String,
    prioridad: Number
});

mongoose.model('Tarea', TareaSchema);