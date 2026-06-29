
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