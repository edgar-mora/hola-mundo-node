// index.js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Saludos a todos  por primera  vez desde Node.js!');
});

app.listen(PORT, () => {
  console.log(`Servidor Node escuchando en puerto ${PORT}`);
});

