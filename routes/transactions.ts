import express from 'express';
import Transaction from '../models/Transactions';
import e from 'express';

const router = express.Router();

// GET all transactions
router.get('/', async (req, res) => {
    console.log('GET request to /transactions');
    try {
      const transactions = await Transaction.find().sort({ date: -1 });
      res.json(transactions);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  });

  //Post a new Transaction

  router.post('/', async(req ,res)=>{
    console.log('POST request to /transactions');
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
    console.log('PUT request to /transactions/:id');
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
        console.log('DELETE request to /transactions/:id');
        try {
            await Transaction.findByIdAndDelete(req.params.id);
            res.status(204).end();
          } catch (err:any) {
            res.status(500).json({ error: err.message });
          }
        });
        
     export default router;
        
