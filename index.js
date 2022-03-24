require('dotenv').config();
// import express from 'express';
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configura CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();

// Rutas
app.use( '/api/users', require('./routes/user.routes'));

app.listen( process.env.PORT, () => {
  console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})
