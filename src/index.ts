import { Contatinho } from "./Contatinho";
import { MsgAudio } from "./MsgAudio";
import { MsgFoto } from "./MsgFoto";
import { MsgTexto } from "./MsgTexto";
import { Whatsapp } from "./Whatsapp";

const ana = new Contatinho("Ana", "11999999999");
const whatsapp = new Whatsapp();

whatsapp.adicionarContato(ana);
whatsapp.adicionarMensagem(new MsgTexto(ana, "10:00", "Oi!"));
whatsapp.adicionarMensagem(new MsgAudio(ana, "10:02", "Mensagem de voz", 12));
whatsapp.adicionarMensagem(new MsgFoto(ana, "10:05", "Foto de viagem", 2048));

console.log("Contatos:");
whatsapp.listarContatos();

console.log("\nMensagens:");
whatsapp.listarMensagens();
