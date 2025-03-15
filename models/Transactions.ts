import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
  description: String,
  category: String,
  date: { type: Date, required: true },
  type: { type: String, enum: ['income', 'expense'], required: true }
});

export default mongoose.model("Transaction", transactionSchema);