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
  constructor(private clientesService:ClientesService,private gruposService:GruposService) {
    this.numeroClientesCadastrados = this.clientesService.getNumeroClientesCadastrados()
    this.numeroGruposCadastrados = this.gruposService.getNumeroGruposCadastrados()

   }

  ngOnInit(): void {
  }

}
