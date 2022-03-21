import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  listagemAtual = 'clientes'
  mudadoListagem(event:any){
      this.listagemAtual = event.item
  }
  ngOnInit(): void {
  }

}
