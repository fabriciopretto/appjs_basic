const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.get('/status', (req, res) => {
  res.send('Status de vida!!!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});