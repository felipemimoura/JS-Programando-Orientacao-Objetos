export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Você não deveria instanciar uma classe do tipo conta");
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

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

  sacar(valor) {
    throw new Error("O método sacar deve ser sobrescrito");
  }

  _sacar(valor, taxa) {
    const valorSacado = valor * taxa;
    if (this._saldo <= valorSacado) {
      console.log("Não foi possivel realizar o saque");
      return;
    }
    this._saldo -= valorSacado;
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
