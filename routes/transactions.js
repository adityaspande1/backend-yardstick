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
const Transactions_1 = __importDefault(require("../models/Transactions"));
const router = express_1.default.Router();
// GET all transactions
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield Transactions_1.default.find().sort({ date: -1 });
        res.json(transactions);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
//Post a new Transaction
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = new Transactions_1.default(req.body);
        yield transaction.save();
        res.status(201).json(transaction);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
//to update the transactions.
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const transaction = yield Transactions_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(transaction);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
// to delete the transactions.
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Transactions_1.default.findByIdAndDelete(req.params.id);
        res.status(204).end();
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}));
exports.default = router;
