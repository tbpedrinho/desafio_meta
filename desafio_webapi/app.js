const express = require('express');
const app = express();


const rotaContatos = require('./routes/contato');

app.use('/contatos', rotaContatos)

module.exports = app;