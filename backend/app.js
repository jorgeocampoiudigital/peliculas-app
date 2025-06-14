const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/generos', require('./routes/genero.routes'));
app.use('/api/directores', require('./routes/director.routes'));
app.use('/api/productoras', require('./routes/productora.routes'));
app.use('/api/tipos', require('./routes/tipo.routes'));
app.use('/api/media', require('./routes/media.routes'));
app.use('/api/usuarios', require('./routes/usuario.routes'));

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
