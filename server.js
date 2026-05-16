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

app.get("/", (req, res) => {
    res.json({ status: "online" });
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});