const mongoose = require('mongoose');

//crear esquema para fuente
const bookSchema = new mongoose.Schema({
    id: {type: Number},
    title : {type: String, required:true, trim:true},
    price: {type: Number, required: true},
    author: {type: String, required: true, trim:true},
    genre: {type: String, required: true, trim:true},
    stars : {type: Number, trim:true, required: true},
    cover: {type: String, trim:true, required: true},
    description: {type: String, trim:true}
})

//crear modelo. El primer parámetro es el nombre de tu tipo de dato. Mongoose busca automáticamente una colección en la BD que sea la versión en plural y minúsculas de este string. 
const Book =  mongoose.model('Book', bookSchema);

//exportar esquema para requerirlo en controllers
module.exports = Book;