const express = require('express');
const app = express();

const db = require('./database/Database');
db();

const routes = require('./routes/router');

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Erro ao iniciar o servidor: ${err}`);
  } else {
    console.log(`Servidor rodando na porta ${PORT}`);
  }
});
