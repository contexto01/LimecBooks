"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const booksDataBase_1 = __importDefault(require("../models/booksDataBase"));
const uuid_1 = require("uuid");
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('Hello World!');
});
router.get('/api/books', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield booksDataBase_1.default.find({});
    res.json(books);
}));
router.get('/api/books/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params; // Obtener el nombre del libro desde los parámetros de la URL
        // Asegurarse de que el nombre no sea vacío
        if (!name || name.trim() === '') {
            return res.status(400).json({ message: 'El parámetro de búsqueda no puede estar vacío' });
        }
        // Buscar libros que coincidan parcialmente con el nombre proporcionado
        const books = yield booksDataBase_1.default.find({ title: { $regex: new RegExp(name, 'i') } });
        if (books.length === 0) {
            return res.status(404).json({ message: 'No se encontraron libros con ese nombre' });
        }
        return res.json(books); // Asegúrate de usar 'return' para finalizar la ejecución
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al buscar libros', error });
    }
}));
router.post('/api/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = new booksDataBase_1.default({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        img: req.body.img,
        idBook: req.body.idBook,
        status: req.body.status,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    const id = (0, uuid_1.v4)();
    book.id = id;
    yield book.save();
    res.json(book);
}));
router.get('/api/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield booksDataBase_1.default.findById(req.params.id);
    res.json(book);
}));
router.put('/api/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield booksDataBase_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.json(book);
}));
router.delete('/api/books/:id', (req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    yield booksDataBase_1.default.findByIdAndDelete(req.params.id);
    // await BookSchema.deleteOne({ idBook: req.params.id })
}));
// delete all books
router.delete('/api/books', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    yield booksDataBase_1.default.deleteMany({});
}));
exports.default = router;
