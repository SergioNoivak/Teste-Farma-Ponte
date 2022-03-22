export class Cliente {
  public identificador:string;
  public nome: string;
  public telefone: string;
  public email: string;
  public grupo: string;
  public selecionado: boolean;

  constructor(identificador:string,nome: string, telefone: string, email: string, grupo: string,selecionado:boolean) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.grupo = grupo;
    this.identificador = identificador
    this.selecionado = selecionado
  }

  // <td>Tiago Souza Pereira</td>
  // <td>+55064981222112</td>
  // <td>tiagosouzapereira@gmail.com</td>
  // <td>Grupo Fabriciatto</td>
}
