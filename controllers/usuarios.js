const { response } = require('express');

const usuariosGet = (req, res = response) => {

   let {q, name} = req.query;
   res.json({
      msg: 'Get API - Controlador',
      q,
      name
   });

};

const usuariosPost = (req, res = response) => {

   const { nombre, edad, page=1} = req.body;

   res.json({
      msg: 'Post API - Controlador',
      nombre,
      edad,
      page
   });
};

const usuariosPut = (req, res = response) => {

   const {id} = req.params;

   res.json({
      msg: 'Put API - Controlador',
      id
   });
};

const usuariosPath = (req, res = response) => {
   res.json({
      msg: 'Path API - Controlador'
   });
};

const usuariosDelete = (req, res = response) => {
   res.json({
      msg: 'Delete API - Controlador'
   });
};

module.exports = {
   usuariosGet,
   usuariosPost,
   usuariosPut,
   usuariosPath,
   usuariosDelete
};