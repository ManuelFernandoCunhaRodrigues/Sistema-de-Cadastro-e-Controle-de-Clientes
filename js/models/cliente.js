/* 
Esse arquivo representa um cliente.

Ele não pega dados do HTML.

Ele não valida.

Ele não salva.

Ele apenas cria um objeto cliente com padrão fixo:

id
nome
email
telefone
documento
status
dataDeCriacao
*/
export class Cliente {
    constructor(nome, email, telefone, documento, statusCliente) {
        this.id = crypto.randomUUID()
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.documento = documento
        this.statusCliente = statusCliente
        this.dataDeCriacao = new Date().toLocaleDateString('pt-BR')
    }
}