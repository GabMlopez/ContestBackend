
const express = require('express');
const router = express.Router();

router.post('/sum',sumar);

async function sumar(req,res) {
      try {
        const {num1,num2} = req.body;
        if(!num1){
            res.status(400).json({
            message:"Ingrese al menos 2 numeros para realizar la suma"
            });
        }
        if(!num2){
            res.status(400).json({
            message:"Ingrese al menos 2 numeros para realizar la suma"
            });
        }
    const suma = num1+num2;
    res.status(200).json({
        suma
    });
    }catch(err){
    res.status(500).json({
            message:"No se pudo hacer la suma"
        });
    }
}

async function multiplicar(req,res) {
    try{
        const {num1,num2} = req.body;
        const mul = num1*num2;
        res.status(200).json({
            mul
        });
    }catch(err){
        res.status(500).json({
            message:"No se pudo hacer la multiplicacion"
        });
    }
}

async function dividir(req,res) {
    try{
        const {num1,num2} = req.body;
        const div = num1/num2;
        res.status(200).json({
            div
        });
    }catch(err){
        res.status(500).json({
            message:"No se pudo hacer la división"
        });
    }
}
module.exports = router;