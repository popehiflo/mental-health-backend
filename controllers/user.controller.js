const UsuarioModel = require('../models/user.model');
const getAllUsers = (req, res) => {
  res.json({
    ok: true,
    data: [],
  });
};

const createUser = async(req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const usuario = new UsuarioModel(req.body);
  await usuario.save();

  res.json({
    ok: true,
    usuario,
  });
};

module.exports = { 
  getAllUsers, 
  createUser 
};
