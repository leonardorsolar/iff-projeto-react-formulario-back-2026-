const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];

app.post("/usuarios", (req, res) => {
  const { nome } = req.body;

  usuarios.push({ nome });

  console.log("Recebido:", nome);

  res.status(201).json({
    mensagem: "Usuário salvo com sucesso",
    dados: usuarios
  });
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
