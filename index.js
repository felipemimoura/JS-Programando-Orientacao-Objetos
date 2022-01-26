import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Felipe", 11122233345);

const contaCorrentCliente1 = new ContaCorrente(1001, cliente1);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

contaCorrentCliente1.depositar(500);

console.log(contaPoupanca);
