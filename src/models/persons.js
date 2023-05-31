const mongoose = require('mongoose');

let personSchema = new mongoose.Schema({ // Creamos un esquema poder crear docuemntos en mongo usando Json como para realizar consultas
    Nombre:String,
    Edad:String,
    TpSangre:String,
    Nss:String
}); 

module.exports = mongoose.model('Persons', personSchema); //exportarmos el valor Persons