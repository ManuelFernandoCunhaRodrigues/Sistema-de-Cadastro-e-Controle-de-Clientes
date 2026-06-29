import { Cliente } from "./models/cliente.js";

const clienteTeste = new Cliente(
    "João Silva",
    "joao@email.com",
    "(98) 99999-9999",
    "123.456.789-00",
    "ativo"
);

console.log(clienteTeste);