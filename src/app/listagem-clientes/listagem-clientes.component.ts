import { Grupo } from './../../model/Grupo';
import { GruposService } from './../services/grupos.service';
import { ClientesService } from './../services/clientes.service';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-listagem-clientes',
  templateUrl: './listagem-clientes.component.html',
  styleUrls: ['./listagem-clientes.component.scss'],
})
export class ListagemClientesComponent implements OnInit {
  clientes: Array<Cliente> = [];
  grupos: Array<Grupo> = [];
  formularioEdicao = this.formBuilder.group({
    nome: '',
    telefone: '',
    email: '',
    grupo: '',
  });
  formularioCriacao = this.formBuilder.group({
    nome: '',
    telefone: '',
    email: '',
    grupo: '',
  });
  selecionado: any = undefined;
  indexSelecionado: number = -1;
  dicionarioGrupos:any = {};
  listagemAtual: Array<Cliente> = [];
  maximoPaginas = 0;
  mostrarBotaoEditar = false;
  quantidadePorPagina: number = 10;
  paginaAtual = '1';
  palavraChave: string = '';
  mostrarBotoesAdicionarEditar: boolean = true;
  exibirPaginacao:boolean = true;
  onSubmitFormularioEdicao() {
    console.log(this.formularioEdicao.value)
    this.clientes[this.indexSelecionado] = new Cliente(this.clientes[this.indexSelecionado].identificador,
      this.formularioEdicao.value.nome,this.formularioEdicao.value.telefone,this.formularioEdicao.value.email,this.formularioEdicao.value.grupo,false)
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
    this.listagemAtual = this.clientes;
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
    for (let index = 0; index < this.clientes.length; index++) {
      if (this.clientes[index].selecionado) selecionados++;
      if (selecionados == 1) {
        this.selecionado = this.clientes[index];
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
  adicionar(){
    let c:Cliente = new Cliente('0',this.formularioCriacao.value.nome,this.formularioCriacao.value.telefone,this.formularioCriacao.value.email,this.formularioCriacao.value.grupo,false)
    this.clientesService.addCliente(c);
    this.decidirListagemAtual();


  }

  excluir() {
    this.clientes = this.clientes.filter(
      (cliente) => cliente.selecionado == false
    );
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
    return Math.ceil(this.clientes.length / this.quantidadePorPagina);
  }

  decidirListagemAtual() {
    this.maximoPaginas = Math.ceil(
      this.clientes.length / this.quantidadePorPagina
    );
    this.listagemAtual = this.clientes.slice(
      0 + this.quantidadePorPagina * (parseInt(this.paginaAtual) - 1),
      this.quantidadePorPagina * (parseInt(this.paginaAtual) - 1) +
        this.quantidadePorPagina
    );
  }

  procurar() {
    this.listagemAtual = this.clientes.filter((cliente) => {
      return cliente.nome.search(new RegExp(this.palavraChave.toString()));
    });
  }
  displayStyle = 'none';
  displayStyleCriacao = 'none';

  getUnicoSelecionado(): any {
    let i:number = -1;
    for (let index = 0; index < this.clientes.length; index++) {
      if (this.clientes[index].selecionado){
        i=index;
        return {"selecionado":this.clientes[index],"i":i};
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
      telefone: this.selecionado.telefone,
      email: this.selecionado.email,
      grupo: this.selecionado.grupo,
    });
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  openPopupCriacao() {

    this.formularioCriacao.setValue({
      nome: "",
      telefone: "",
      email: "",
      grupo: "",
    });
    this.displayStyleCriacao = 'block';
  }
  closePopupCriacao() {
    this.displayStyleCriacao = 'none';
  }

  constructor(
    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private gruposService: GruposService
  ) {
    this.clientes = clientesService.getAllClientes();
    this.grupos = gruposService.getAllGrupos();
    this.dicionarioGrupos = gruposService.getAllGruposDicionario();
    this.decidirListagemAtual();
    console.log(this.listagemAtual);
  }

  ngOnInit(): void {}
}
