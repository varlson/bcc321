const express = require("express");
const pg = require("pg");
const app = express();
const route = require("./Route/router");
const { client } = require("./database/queries");
require("dotenv").config();

const PORT = process.env.PORT || 8003;

app.use(express.json());
/* ROTAS */
app.use("/api", route);
app.listen(PORT, () => {
  client.connect((error) => {
    if (error) {
      console.log("O servidor nao pode ser iniciada, houve erro na conexao");
    }

    console.log("Banco de dado conectado com sucesso");
    console.log(`server running at ${PORT}`);
  });
});
