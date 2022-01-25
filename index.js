import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
const cliente1 = new Cliente();
const contaCorrentCliente1 = new ContaCorrente();
cliente1.nome = "Felipe";
cliente1.cpf = 11122233390;
contaCorrentCliente1.agencia = 1001;
contaCorrentCliente1.depositar(1000);
contaCorrentCliente1.sacar(200);

const cliente2 = new Cliente();
cliente2.nome = "Carla";
cliente2.cpf = 22233344456;

console.log(cliente2, cliente1);
