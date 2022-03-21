import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output()
  @Output() mudadoListagem = new EventEmitter<any>();
  mudadoItem(novoItem:string){
      this.mudadoListagem.emit({"item":novoItem});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
