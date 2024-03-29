import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";
import errorHandler from "./middlewares/error-handler.middleware";

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(statusRoute);
app.use(usersRoute);

// Configuração dos Handlers de Erro
app.use(errorHandler);

// Inicialização do servidor
app.listen(5000, () => {
  console.log("Aplicação executando na porta 5000!");
});
