import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class MsgFoto extends Mensagem {
  constructor(
    destinatario: Contatinho,
    horaEnvio: string,
    conteudo: string,
    readonly tamanho: number,
  ) {
    super(destinatario, horaEnvio, conteudo);
  }

  toString(): string {
    return `[Foto] Para: ${this.destinatario.getNome()} | ${this.horaEnvio} | ${this.conteudo} (${this.tamanho} KB)`;
  }
}
