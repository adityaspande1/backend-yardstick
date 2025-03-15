"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const transactions_1 = __importDefault(require("./routes/transactions"));
const budget_1 = __importDefault(require("./routes/budget"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: "*"
}));
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err));
app.use('/api/transactions', transactions_1.default);
app.use('/api/budgets', budget_1.default);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
