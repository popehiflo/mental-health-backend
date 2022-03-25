const { request, response } = require('express');
const UserModel = require('../models/user.model');

const getAllUsers = async(req, res) => {
  const users = await UserModel.find({}, 'first_name last_name email');
  res.json({
    ok: true,
    data: users,
  });
};

const createUser = async(req, res = response) => {
  const { first_name, last_name, email, password } = req.body;

  // validar que email sea unico
  try {
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
      return res.status(400).json({
        ok: false,
        msg: 'El email ya esta registrado'
      });
    }
    const newUser = new UserModel(req.body);
    await newUser.save();

    res.json({
      ok: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error!... ver Logs'
    })
  }
};

module.exports = { 
  getAllUsers, 
  createUser 
};
