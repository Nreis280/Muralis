const validarCreate = (req,res, next) => {
    const {body} = req;

    if(body.valor == null || body.descricao == null || body.tipo_pagamento_id == null || body.categoria_id == null){
    res.status(400).json({data: null, sucess: false})
}

next();
}

module.exports = {validarCreate}