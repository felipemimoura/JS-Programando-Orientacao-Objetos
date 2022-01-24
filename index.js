class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente()
cliente1.nome = 'Felipe'
cliente1.cpf = 11122233390
cliente1.agencia = 1001
cliente1.saldo = 0

const cliente2 = new Cliente()
cliente2.nome = "Carla"
cliente2.cpf = 22233344456
cliente2.agencia = 1001
cliente2.saldo = 0

console.log(cliente2, cliente1)