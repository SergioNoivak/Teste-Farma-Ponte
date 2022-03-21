export class Grupo {

  public identificador:String;
  public nome: String;
  public selecionado: boolean;

  constructor(identificador:String,nome: String,selecionado: boolean) {
    this.nome = nome;
    this.identificador = identificador
    this.selecionado = selecionado
  }

}
