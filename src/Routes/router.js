const dpController = require('../Controllers/dispesasController')


const express = require ('express')

const router = express.Router();

router.get('/listar',dpController.getAll )
router.post('/criar',dpController.createDespesa)




module.exports = router;