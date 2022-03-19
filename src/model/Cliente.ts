export class Cliente {
  public identificador:String;
  public nome: String;
  public telefone: String;
  public email: String;
  public grupo: String;

  constructor(identificador:String,nome: String, telefone: String, email: String, grupo: String) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.grupo = grupo;
    this.identificador = identificador
  }

  // <td>Tiago Souza Pereira</td>
  // <td>+55064981222112</td>
  // <td>tiagosouzapereira@gmail.com</td>
  // <td>Grupo Fabriciatto</td>
}
