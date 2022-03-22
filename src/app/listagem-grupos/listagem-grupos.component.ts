import { Grupo } from './../../model/Grupo';
import { GruposService } from './../services/grupos.service';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from './../services/clientes.service';
import { ThisReceiver } from '@angular/compiler';
import { FormBuilder } from '@angular/forms';
import { Cliente } from '../../model/Cliente';
@Component({
  selector: 'app-listagem-grupos',
  templateUrl: './listagem-grupos.component.html',
  styleUrls: ['./listagem-grupos.component.scss']
})
export class ListagemGruposComponent implements OnInit {
  grupos: Array<Grupo> = [];
  formularioEdicao = this.formBuilder.group({
    nome: '',
    identificador:''

  });
  formularioCriacao = this.formBuilder.group({
    nome: '',
    identificador:''

  });
  selecionado: any = undefined;
  indexSelecionado: number = -1;

  listagemAtual: Array<Grupo> = [];
  maximoPaginas = 0;
  mostrarBotaoEditar = false;
  quantidadePorPagina: number = 10;
  paginaAtual = '1';
  palavraChave: string = '';
  mostrarBotoesAdicionarEditar: boolean = true;
  exibirPaginacao:boolean = true;
  onSubmitFormularioEdicao() {
    console.log(this.formularioEdicao.value)
    this.grupos[this.indexSelecionado] = new Grupo(this.grupos[this.indexSelecionado].identificador,
      this.formularioEdicao.value.nome,false)

      this.decidirListagemAtual();
      this.mostrarBotaoEditar = false

    }
  testeVazio($event: any) {
    if (this.palavraChave == '') {
      this.exibirPaginacao=true;
      console.log('Mudado');
      this.decidirListagemAtual();
    }
    else{
      this.exibirPaginacao=false
    }
  }
  ajustarFocoCampoPesquisa() {
    this.listagemAtual = this.grupos;
  }
  mudadoPagina(valor: any) {
    this.quantidadePorPagina = parseInt(valor.value);
    this.paginaAtual = '1';
    this.decidirListagemAtual();
  }
  ajustarBotaoExcluir() {
    this.mostrarBotaoEditar = false;
    let selecionados: number = 0;
    this.mostrarBotoesAdicionarEditar = true;
    for (let index = 0; index < this.grupos.length; index++) {
      if (this.grupos[index].selecionado) selecionados++;
      if (selecionados == 1) {
        this.selecionado = this.grupos[index];
        this.indexSelecionado = index;
        this.mostrarBotaoEditar = true;
      } else {
        this.mostrarBotaoEditar = false;
      }
      if (selecionados == 2) {
        this.mostrarBotoesAdicionarEditar = false;
        return;
      }
    }
  }

  excluir() {
    this.grupos = this.grupos.filter(
      (cliente) => cliente.selecionado == false
    );
    this.gruposService.remove(this.indexSelecionado)
    this.decidirListagemAtual();
  }

  editarCliente() {}

  avancarPagina() {
    let paginaInteiro: number = parseInt(this.paginaAtual);
    let proximaPagina =
      paginaInteiro + 1 > this.getMaximoPaginas()
        ? paginaInteiro
        : paginaInteiro + 1;
    this.paginaAtual = proximaPagina.toString();
    this.decidirListagemAtual();
  }
  retrocederPagina() {
    let paginaInteiro: number = parseInt(this.paginaAtual);
    this.paginaAtual = (
      paginaInteiro - (paginaInteiro != 1 ? 1 : 0)
    ).toString();
    this.decidirListagemAtual();
  }

  getMaximoPaginas() {
    return Math.ceil(this.grupos.length / this.quantidadePorPagina);
  }

  decidirListagemAtual() {
    this.maximoPaginas = Math.ceil(
      this.grupos.length / this.quantidadePorPagina
    );
    this.listagemAtual = this.grupos.slice(
      0 + this.quantidadePorPagina * (parseInt(this.paginaAtual) - 1),
      this.quantidadePorPagina * (parseInt(this.paginaAtual) - 1) +
        this.quantidadePorPagina
    );
  }

  procurar() {
    this.listagemAtual = this.grupos.filter((cliente) => {
      return cliente.nome.search(new RegExp(this.palavraChave.toString()));
    });
  }
  displayStyle = 'none';
  displayStyleCriacao = 'none';

  getUnicoSelecionado(): any {
    let i:number = -1;
    for (let index = 0; index < this.grupos.length; index++) {
      if (this.grupos[index].selecionado){
        i=index;
        return {"selecionado":this.grupos[index],"i":i};
      }
    }
    return {"selecionado":undefined,"i":-1};
  }
  openPopup() {
    let unico= this.getUnicoSelecionado();
    this.selecionado =unico.selecionado;
    this.indexSelecionado = unico.i;
    this.formularioEdicao.setValue({
      nome: this.selecionado.nome,
      identificador:this.selecionado.identificador
    });
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }


  openPopupCriacao() {

    this.formularioCriacao.setValue({
      nome: "",
      identificador: "",

    });
    this.displayStyleCriacao = 'block';
  }
  closePopupCriacao() {
    this.displayStyleCriacao = 'none';
  }
  adicionar(){
    let g:Grupo = new Grupo('0',this.formularioCriacao.value.nome,false)
    this.gruposService.addGrupo(g);
    this.decidirListagemAtual();


  }
  constructor(
    private formBuilder: FormBuilder,
    private gruposService: GruposService
  ) {
    this.grupos = gruposService.getAllGrupos();
    this.decidirListagemAtual();
    console.log(this.listagemAtual);
  }

  ngOnInit(): void {}

}
