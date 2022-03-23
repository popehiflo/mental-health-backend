// import express from 'express';
const express = require('express');
require('dotenv').config;

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Rutas
app.get( '/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Hola mundo!'
  });
});

app.listen( process.env.PORT, () => {
  console.log('Servidor corriendo en el puerto ' + process.env.PORT);
})
