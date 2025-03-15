import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import transactionRoutes from './routes/transactions';
import budgetRoutes from './routes/budget';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors(
    {
        origin:"*"
    }
));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
