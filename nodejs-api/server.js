/** Requerindo express */
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

/** Inicializando express */
const app = express();
app.use(express.json());
app.use(cors());

/** Iniciando o DB */
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("./src/models");

// Rotes
app.use('/api', require('./src/routes'));

/** Escutar porta 3001 */
app.listen(3001);