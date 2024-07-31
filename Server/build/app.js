"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("./router/books"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;
// let db: Book[] = [] // Define db as an array of Book objects
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/', books_1.default);
if (mongoUri) {
    mongoose_1.default
        .connect(mongoUri)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
}
else {
    console.error('Please set the MONGODB_URI environment variable', mongoUri);
    process.exit(1);
}
// app.get('/', (_req: Request, res: Response) => {
//   res.send(db)
// })
// app.post('/api/books', (req: Request, res: Response) => {
//   const book = req.body
//   db.push({
//     id: crypto.randomUUID(),
//     title: book.title,
//     author: book.author,
//     description: book.description
//   })
//   res.send(db)
// })
// app.get('/api/books', (_req: Request, res: Response) => {
//   res.send(db)
// })
// app.get('/api/books/:id', (req: Request, res: Response) => {
//   const id = req.params.id
//   const book = db.find((b) => b.id === id)
//   res.send(book)
// })
// app.put('/api/books/:id', (req: Request, res: Response) => {
//   const id = req.params.id
//   const book = req.body
//   const index = db.findIndex((b) => b.id === id)
//   db[index] = book
//   res.send(db)
// })
// app.delete('/api/books/:id', (req: Request, res: Response) => {
//   const id = req.params.id
//   const index = db.findIndex((b) => b.id === id)
//   db.splice(index, 1)
//   res.send(db)
// })
app.listen(port, () => {
    console.log('Server is running on port http://localhost:3000');
});
