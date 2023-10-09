const dpController = require('../Controllers/despesasController')

const despesaMiddleware = require('../Middleware/Middleware')
const express = require ('express')

const router = express.Router();

router.get('/listar',dpController.getAll )
router.post('/criar',despesaMiddleware.validarCreate,dpController.createDespesa)




module.exports = router;