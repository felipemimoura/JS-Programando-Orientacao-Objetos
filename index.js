import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
const cliente1 = new Cliente();
const contaCorrentCliente1 = new ContaCorrente();
cliente1.nome = "Felipe";
cliente1.cpf = 11122233390;
contaCorrentCliente1.agencia = 1001;
contaCorrentCliente1.cliente = cliente1;
contaCorrentCliente1.depositar(500);

const cliente2 = new Cliente();
cliente2.nome = "Carla";
cliente2.cpf = 22233344456;
const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 1002;
contaCliente2.cliente = cliente2;

contaCorrentCliente1.transferir(200, contaCliente2);

console.log(contaCliente2, contaCorrentCliente1);
