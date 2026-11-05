import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class MsgTexto extends Mensagem {
  readonly numChar: number;

  constructor(destinatario: Contatinho, horaEnvio: string, conteudo: string) {
    super(destinatario, horaEnvio, conteudo);
    this.numChar = conteudo.length;
  }

  toString(): string {
    return `[Texto] Para: ${this.destinatario.getNome()} | ${this.horaEnvio} | ${this.conteudo} (${this.numChar} caracteres)`;
  }
}
