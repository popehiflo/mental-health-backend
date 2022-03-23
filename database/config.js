//import mongoose from 'mongoose';
const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://<user>:<password>@cluster0.6by7g.mongodb.net/mhdb");
    console.log('db On Fire!');
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de iniciar la db!');
  }
};

module.exports = {
  dbConnection
}
