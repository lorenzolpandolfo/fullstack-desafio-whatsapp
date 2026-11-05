export class Contatinho {
  constructor(
    private nome: string,
    private celular: string,
  ) {}

  getNome(): string {
    return this.nome;
  }

  getCelular(): string {
    return this.celular;
  }
}
