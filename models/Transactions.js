"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
    amount: { type: Number, required: true },
    description: String,
    category: String,
    date: { type: Date, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true }
});
exports.default = mongoose_1.default.model("Transaction", transactionSchema);
