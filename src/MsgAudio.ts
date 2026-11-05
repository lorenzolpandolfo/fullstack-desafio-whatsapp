import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class MsgAudio extends Mensagem {
  constructor(
    destinatario: Contatinho,
    horaEnvio: string,
    conteudo: string,
    readonly duracao: number,
  ) {
    super(destinatario, horaEnvio, conteudo);
  }

  toString(): string {
    return `[Áudio] Para: ${this.destinatario.getNome()} | ${this.horaEnvio} | ${this.conteudo} (${this.duracao}s)`;
  }
}
