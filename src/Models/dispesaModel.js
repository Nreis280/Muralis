/* const { Query } = require("mysql2/typings/mysql/lib/protocol/sequences/Query"); */
const connection = require("../Config/dbConnection")

const getAll = async () =>{

    const [dispesas] = await connection.execute(`
    SELECT d.id,  d.valor,  d.data_compra,  d.descricao,  d.categoria_id, tp.tipo AS tipo_pagamento
    FROM despesas d
    JOIN tipos_pagamento tp ON d.tipo_pagamento_id = tp.id;`)
    
    return dispesas;
} 

/* const createDispesa = async (dispesas) =>{
    const { valor } = dispesas;

    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO DESPESAS() VALUES(?,?,?)';
    

    const createDispesa = await connection.execute(query,[valor,'pendente',dateUTC]);
} */


module.exports = {getAll/*  createDispesa */}