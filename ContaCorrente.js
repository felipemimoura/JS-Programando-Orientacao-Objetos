export class ContaCorrente {
  agencia;
  _saldo = 0;
  sacar(valor) {
    if (this._saldo <= valor) {
      console.log("Não foi possivel realizar o saque");
      return;
    }
    this._saldo = this._saldo - valor;
    console.log(`O novo saldo é de ${this._saldo}`);
  }
  depositar(valor) {
    if (valor <= 0) {
      console.log("Não é possível fazer um depósito de valor negativo");
      return;
    }
    this._saldo += valor;
    console.log(`Após o depósito o saldo é de: ${this._saldo}`);
  }
}
