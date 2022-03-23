// import express from 'express';
const express = require('express');

// Crear el servidor de express
const app = express();

app.listen( 3000, () => {
  console.log('Servidor corriendo en el puerto ' + 3000);
})
