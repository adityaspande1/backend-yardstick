import express from 'express';
import Transaction from '../models/Transactions';

const router = express.Router();

// GET all transactions
router.get('/', async (req, res) => {
    try {
      const transactions = await Transaction.find().sort({ date: -1 });
      res.json(transactions);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  });

  //Post a new Transaction

  router.post('/', async(req ,res)=>{
    try{
        const transaction= new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    }catch(err:any){
        res.status(400).json({error:err.message});

    }
  });

  //to update the transactions.
  router.put('/:id', async(req,res)=>{
      try{
          const {id}=req.params;
          const transaction=await Transaction.findByIdAndUpdate(req.params.id,  req.body,{new:true});
            res.json(transaction);
      }
      catch(err:any){
            res.status(400).json({error:err.message});
        }   
    });


    // to delete the transactions.
    router.delete('/:id', async(req,res)=>{
        try {
            await Transaction.findByIdAndDelete(req.params.id);
            res.status(204).end();
          } catch (err:any) {
            res.status(500).json({ error: err.message });
          }
        });
        
     export default router;
        
