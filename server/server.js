const express = require("express");
const pg = require("pg");
const app = express();
const route = require("./Route/router");
const { client } = require("./database/queries");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 8003;

app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
  })
);

app.use(express.json());
/* ROTAS */
app.use("/api", route);

app.listen(PORT, () => {
  client.connect((error) => {
    console.log(process.env.DB_URL);
    if (error) {
      console.log("O servidor nao pode ser iniciada, houve erro na conexao");
      console.log(error);
    } else {
      console.log("Banco de dado conectado com sucesso");
      console.log(`server running at ${PORT}`);
    }
  });
});
