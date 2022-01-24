class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    _saldo = 0;
    sacar(valor) {
        if (this._saldo <= valor) {
            console.log('Não foi possivel realizar o saque')
            return
        }
        this._saldo = this._saldo - valor
        console.log(`O novo saldo é de ${this._saldo}`)
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log('Não é possível fazer um depósito de valor negativo')
            return
        }
        this._saldo += valor
        console.log(`Após o depósito o saldo é de: ${this._saldo}`)
    }
}

const cliente1 = new Cliente()
const contaCorrentCliente1 = new ContaCorrente()
cliente1.nome = 'Felipe'
cliente1.cpf = 11122233390
contaCorrentCliente1.agencia = 1001
contaCorrentCliente1.depositar(1000)
contaCorrentCliente1.sacar(200)



const cliente2 = new Cliente()
cliente2.nome = "Carla"
cliente2.cpf = 22233344456


console.log(cliente2, cliente1)