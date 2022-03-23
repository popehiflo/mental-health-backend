//import mongoose from 'mongoose';
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('SUCCESSFUL! Conexion exitosa a la Base de Datos');
  } catch (error) {
    console.log(error);
    throw new Error('FAILED! Conexion fallida a la Base de Datos');
  }
};

module.exports = {
  dbConnection
}
