"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: false },
    idBook: { type: String, required: true }
    // coso: { type: String, required: true }
});
// const Task = mongoose.model('Task', taskSchema)
exports.default = mongoose_1.default.model('Book', BookSchema);
