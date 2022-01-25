import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Felipe", 11122233345);
const cliente2 = new Cliente("Carla", 22233344456);

const contaCorrentCliente1 = new ContaCorrente(1001, cliente1);
const contaCorrentCliente2 = new ContaCorrente(1002, cliente2);

contaCorrentCliente1.depositar(500);

contaCorrentCliente1.transferir(200, contaCorrentCliente2);

console.log(ContaCorrente.numeroDeContas);
