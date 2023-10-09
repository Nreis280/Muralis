const connection = require("../Config/dbConnection")

const getAll = async () =>{

    const [despesas] = await connection.execute(`
    SELECT d.*, tp.tipo AS tipo_pagamento, c.nome AS nome_categoria
    FROM despesas d
    JOIN tipos_pagamento tp ON d.tipo_pagamento_id = tp.id
    JOIN categorias c ON d.categoria_id = c.id
    WHERE MONTH(d.data_compra) = MONTH(NOW()) AND YEAR(d.data_compra) = YEAR(NOW()) ORDER BY d.id;`)
    
    return {despesas};
} 

const createDespesa = async (despesas) =>{
    const {valor,descricao,tipo_pagamento_id,categoria_id} = despesas;

    const dateUTC = new Date();

    const query = `INSERT INTO despesas(valor, data_compra,descricao,tipo_pagamento_id, categoria_id) VALUES(?,?,?,?,?)`;

    const [creatDespesa] = await connection.execute(query,[valor,dateUTC,descricao,tipo_pagamento_id,categoria_id])

return {insertId: creatDespesa.insertId}
}


module.exports = {getAll,createDespesa}