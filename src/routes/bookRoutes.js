const express = require('express');
//traer controladores
const {getBooks, getBook, postBook, patchBook, deleteBook} = require('../controllers/bookControllers');
//función de autenticación
// const {isAuth} = require('../middlewares/authMiddleware');

//crear router
const booksRouter = express.Router();

booksRouter.get('/', getBooks);
booksRouter.get('/:id', getBook);
booksRouter.post('/' , postBook);
booksRouter.patch('/:id', patchBook);
booksRouter.delete('/:id', deleteBook);

module.exports = booksRouter;