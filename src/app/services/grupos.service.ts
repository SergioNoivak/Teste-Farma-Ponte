import { Grupo } from './../../model/Grupo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
grupos = [
  new Grupo(
    '1',
    'Grupo Geral',false)
,
new Grupo(
'2',
'Grupo Geral 2',false)

];

  getAllGrupos():Array<Grupo>{
    return  this.grupos;


  }

  remove(i:number){
    this.grupos = this.grupos.splice(i,1)
  }
  getAllGruposDicionario():any{
    let retorno:any ={}
      for (let index = 0; index < this.grupos.length; index++) {
          retorno[this.grupos[index].identificador+""] = new Grupo(this.grupos[index].identificador+"",this.grupos[index].nome,false)
      }
    return  retorno;


  }
  addGrupo(grupo:Grupo){
    grupo.identificador = this.grupos.length+""
    this.grupos.push(grupo);
  }
}


