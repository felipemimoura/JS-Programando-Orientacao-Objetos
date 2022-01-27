export class SistemaAutenticacao {
  static login(funcionario, senha) {
    return funcionario.autenticar(senha);
  }
}
