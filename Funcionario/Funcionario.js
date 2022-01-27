export class Funcionario {
  constructor(nome, salario, cpf) {
    if (this.constructor == Funcionario) {
      throw new Error(
        "Você não deveria instanciar uma classe do tipo funcionario"
      );
    }
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;
    this._bonificacao = 1;
    this._senha;
  }

  autenticar(senha) {
    return this._senha == senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }
}
