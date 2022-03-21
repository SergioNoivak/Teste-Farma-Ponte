import { Grupo } from './../../model/Grupo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {


  getAllGrupos():Array<Grupo>{
    return  [
      new Grupo(
        '1',
        'Grupo Geral',false)
,
new Grupo(
  '2',
  'Grupo Geral 2',false)

    ];


  }
}
