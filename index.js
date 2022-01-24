class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    saldo;
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor
            console.log(`O novo saldo é de ${this.saldo}`)
            return
        }
        console.log('Não foi possivel realizar o saque')
    }
}

const cliente1 = new Cliente()
const contaCorrentCliente1 = new ContaCorrente()
cliente1.nome = 'Felipe'
cliente1.cpf = 11122233390
contaCorrentCliente1.agencia = 1001
contaCorrentCliente1.saldo = 100
contaCorrentCliente1.sacar(200)


const cliente2 = new Cliente()
cliente2.nome = "Carla"
cliente2.cpf = 22233344456


console.log(cliente2, cliente1)