import express from 'express';
import Budget from '../models/Budget';

const router = express.Router();

// GET all budgets
router.get('/', async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
