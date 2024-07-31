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
router.post('/api/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = new booksDataBase_1.default({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
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
}));
exports.default = router;
