const despesaModel = require('../Models/dispesaModel');

const getAll = async (req,res) =>{
    const despesas = await despesaModel.getAll();
    return res.status(200).json({despesas,sucess: 'true'});
    
}

const createDespesa = async (req,res) => {
    try{
        const  createDespesa = await despesaModel.createDespesa(req.body);
        return res.status(201).json({createDespesa,sucess: 'true'});
    }catch(error){
        console.log(res.status(400).json({data:null,sucess: 'false'}));
    }
}


module.exports = {getAll, createDespesa}