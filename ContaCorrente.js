import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;

  //Setters
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  //Getters
  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }

  // Métodos
  sacar(valor) {
    if (this._saldo <= valor) {
      console.log("Não foi possivel realizar o saque");
      return;
    }
    this._saldo = this._saldo - valor;
    return valor;
  }
  depositar(valor) {
    if (valor <= 0) {
      console.log("Não é possível fazer um depósito de valor negativo");
      return;
    }
    this._saldo += valor;
    console.log(`Após o depósito o saldo é de: ${this._saldo}`);
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
