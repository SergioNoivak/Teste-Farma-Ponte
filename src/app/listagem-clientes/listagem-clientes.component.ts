import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../model/Cliente';
@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.scss'],
})
export class ListagemClientesComponent implements OnInit {
  clientes: Array<Cliente> = [
    new Cliente(
      '1',
      'Tiago Souza Pereira',
      '+55064981222112',
      'tiagosouzapereira@gmail.com',
      'Grupo Fabriciatto'
    ),
    new Cliente(
      '2',
      'Efigênia Gonçalves de Araújo',
      '+55064921322414',
      'efizinhagoncalves@hotmail.com',
      'Grupo Geral'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ), new Cliente(
      '1',
      'Tiago Souza Pereira',
      '+55064981222112',
      'tiagosouzapereira@gmail.com',
      'Grupo Fabriciatto'
    ),
    new Cliente(
      '2',
      'Efigênia Gonçalves de Araújo',
      '+55064921322414',
      'efizinhagoncalves@hotmail.com',
      'Grupo Geral'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),
    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),    new Cliente(
      '3',
      'Armando Zanatto',
      '+55064921322414',
      'armandinhonaosoucantor@gmail.com',
      'Grupo Zanatto'
    ),

  ];
  listagemAtual:Array<Cliente> =[]
maximoPaginas = 0

quantidadePorPagina:number = 10;
paginaAtual = "1"
palavraChave:string="";
testeVazio($event:any){
  if($event.value==""){
    this.decidirListagemAtual();
  }

}
ajustarFocoCampoPesquisa(){
  this.listagemAtual = this.clientes
}
mudadoPagina(valor:any){
  this.quantidadePorPagina =  parseInt(valor.value)
  this.paginaAtual = '1'
  this.decidirListagemAtual()

}

avancarPagina(){
  let paginaInteiro:number = parseInt(this.paginaAtual);
  let proximaPagina =(paginaInteiro+1)>this.getMaximoPaginas()?paginaInteiro:paginaInteiro+1;
  this.paginaAtual = (proximaPagina).toString()
  this.decidirListagemAtual()
}
retrocederPagina(){
  let paginaInteiro:number = parseInt(this.paginaAtual);
  this.paginaAtual = (paginaInteiro-(paginaInteiro!=1?1:0)).toString()
  this.decidirListagemAtual()

}

getMaximoPaginas(){
 return Math.ceil(this.clientes.length / this.quantidadePorPagina);
}

decidirListagemAtual(){
  this.maximoPaginas = Math.ceil(this.clientes.length/this.quantidadePorPagina);
  this.listagemAtual = this.clientes.slice(0+this.quantidadePorPagina*(parseInt(this.paginaAtual)-1),this.quantidadePorPagina*(parseInt(this.paginaAtual)-1) + this.quantidadePorPagina)

}

procurar(){

    this.listagemAtual = (this.clientes.filter(cliente => {
      return cliente.nome.search(new RegExp(this.palavraChave.toString()));

    } ));


}

  constructor() {
    this.decidirListagemAtual();
    console.log(this.listagemAtual)
  }

  ngOnInit(): void {}
}
