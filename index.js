// index.js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Saludos a todo el equipo de Desarrollo de MIFEL, Mensaje enviado con  Node.js!');
});

app.listen(PORT, () => {
  console.log(`Servidor Node escuchando en puerto ${PORT}`);
});

