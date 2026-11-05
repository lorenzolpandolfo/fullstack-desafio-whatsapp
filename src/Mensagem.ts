import { Contatinho } from "./Contatinho";

export abstract class Mensagem {
  constructor(
    protected destinatario: Contatinho,
    protected horaEnvio: string,
    protected conteudo: string,
  ) {}

  abstract toString(): string;
}
