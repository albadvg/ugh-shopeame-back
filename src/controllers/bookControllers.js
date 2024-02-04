//traerse el modelo
const Book = require('../models/bookModel');
//codigos error
const HTTPSTATUSCODE = require('../../utils/db');

//controlador para el get de todas las fuentes
const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            status: 200,
            message:HTTPSTATUSCODE[200],
            data: books //enviamos todas las fuentes
        });
    } catch (error) {
        next(error);
    }
}

//get de una por id
const getBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: book
        })
    } catch (error) {
        next(error)
    }
}

//subir una fuente
const postBook = async (req, res, next) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json({
            status: 201,
            message:HTTPSTATUSCODE[201],
            data: newBook
        });

    } catch (error) {
        next(error);
    }
}

//actualizar una fuente por id
const patchBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const patchBook = new Book(req.body);
        // patchBook._id = id;
        const updatedBook = await Book.findByIdAndUpdate(id, patchBook, {new: true}); //new true permite que se devuelva el documento DESPUES de la actualización

        if(!updatedBook) {
            return res.status(404).json({message: HTTPSTATUSCODE[404]})
        }

        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: updatedBook
        })

    } catch (error) {
        next(error);
    }
}

//borrar una fuente por id
const deleteBook = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            return res.status(404).json({message: HTTPSTATUSCODE[404]});
        }

        res.status(200).json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: deletedBook
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: HTTPSTATUSCODE[500]
        })
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}
