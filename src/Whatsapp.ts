import { Contatinho } from "./Contatinho";
import { Mensagem } from "./Mensagem";

export class Whatsapp {
  private contatos: Contatinho[] = [];
  private mensagens: Mensagem[] = [];

  adicionarContato(contato: Contatinho): void {
    this.contatos.push(contato);
  }

  adicionarMensagem(mensagem: Mensagem): void {
    this.mensagens.push(mensagem);
  }

  listarContatos(): void {
    this.contatos.forEach((contato) => {
      console.log(`${contato.getNome()} - ${contato.getCelular()}`);
    });
  }

  listarMensagens(): void {
    this.mensagens.forEach((mensagem) => {
      console.log(mensagem.toString());
    });
  }
}
