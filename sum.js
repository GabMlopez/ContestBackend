
const express = require('express');
const router = express.Router();

router.post('/sum',sumar);

async function sumar(req,res) {
      try {
    res.status(200).json({
        suma:req.body.num1+req.body.num2
    })
    }catch(err){
    res.status(500).json({
            message:"No se pudo hacer la suma"
        })
    }
}
module.exports = router;