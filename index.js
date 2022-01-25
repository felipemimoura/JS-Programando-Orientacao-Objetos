import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const contaCorrentCliente1 = new ContaCorrente();

contaCorrentCliente1.cliente = new Cliente();

contaCorrentCliente1.cliente.nome = "Felipe";
contaCorrentCliente1.cliente.cpf = 11122233345;

contaCorrentCliente1.agencia = 1001;
contaCorrentCliente1.depositar(500);

const contaCliente2 = new ContaCorrente();
contaCliente2.cliente = new Cliente();
contaCliente2.cliente.nome = "Carla";
contaCliente2.cliente.cpf = 22233344456;

contaCliente2.agencia = 1002;

contaCorrentCliente1.transferir(200, contaCliente2);

console.log(contaCliente2);
