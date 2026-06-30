/**
 * Esse arquivo só inicia a aplicação.

Ele deve importar as classes, criar os objetos e conectar tudo.

A ideia dele é:

Criar Repository
Criar Service passando Repository
Criar View
Criar Controller passando Service e View
Iniciar Controller

O main.js não deve ter regra de cadastro, DOM ou validação.
 */


import { Cliente } from "./models/Cliente.js";

const clienteTeste = new Cliente(
    "João Silva",
    "joao@email.com",
    "(98) 99999-9999",
    "123.456.789-00",
    "ativo"
);

console.log(clienteTeste);