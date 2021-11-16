const { Router } = require('express');
const { usuariosGet, usuariosDelete, usuariosPath, usuariosPut, usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.get('/',  usuariosGet);

router.post('/',  usuariosPost);

router.put('/:id',  usuariosPut);

router.patch('/',  usuariosPath);

router.delete('/',  usuariosDelete);

module.exports = router;