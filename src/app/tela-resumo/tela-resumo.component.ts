import { Cliente } from './../../model/Cliente';
import { Grupo } from './../../model/Grupo';
import { GruposService } from './../services/grupos.service';
import { ClientesService } from './../services/clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-resumo',
  templateUrl: './tela-resumo.component.html',
  styleUrls: ['./tela-resumo.component.scss']
})
export class TelaResumoComponent implements OnInit {

  numeroClientesCadastrados:number=-1;
  numeroGruposCadastrados:number=-1;

  grupos: Array<Grupo> = [];
  gruposDicionario: any = {};
  clientes: Array<Cliente> = [];
  selectgrupos:any;
  gruposVazios:Array<any> = []
  constructor(private clientesService:ClientesService,private gruposService:GruposService) {
    this.numeroClientesCadastrados = this.clientesService.getNumeroClientesCadastrados()
    this.numeroGruposCadastrados = this.gruposService.getNumeroGruposCadastrados()
    this.grupos = gruposService.getAllGrupos();
    this.gruposDicionario = gruposService.getAllGruposDicionario();
    this.clientes = clientesService.getAllClientes();
    this.listagemClientes = this.clientes;
   }

   listagemClientes:Array<Cliente> = [];

  ngOnInit(): void {
    this.gruposSemClientes();

  }

  gruposSemClientes(){
      let grupos:any = {}
      let keys = Object.keys(this.gruposDicionario)
      for (let i = 0; i < keys.length; i++)
          grupos[keys[i]+""] = 0

      for (let i = 0; i < this.clientes.length; i++) {
        grupos[this.clientes[i].grupo+""]++

      }
      this.gruposVazios = []
      for (var key in grupos) {
        if (grupos.hasOwnProperty(key)) {
            if(grupos[key]==0)
              this.gruposVazios.push(key);
        }
  }

}
  mudarGrupos(valor:any){
    console.log(valor.value)
    this.listagemClientes = this.clientes.filter((cliente)=>parseInt(cliente.grupo) == parseInt(valor.value+""))

  }

}
