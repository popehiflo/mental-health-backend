const UserModel = require('../models/user.model');

const getAllUsers = async(req, res) => {
  const users = await UserModel.find({}, 'first_name last_name email');
  res.json({
    ok: true,
    data: users,
  });
};

const createUser = async(req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const newUser = new UserModel(req.body);
  await newUser.save();

  res.json({
    ok: true,
    data: newUser,
  });
};

module.exports = { 
  getAllUsers, 
  createUser 
};
