const dispesaModel = require('../Models/dispesaModel');

const getAll = async (req,res) =>{
    const despesas = await dispesaModel.getAll();
    return res.status(200).json({despesas,sucess: 'true'});
    
}




module.exports = {getAll}