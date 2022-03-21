import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getAllClientes():Array<Cliente>{
    return  [
      new Cliente(
        '1',
        'Tiago Souza Pereira',
        '+55064981222112',
        'tiagosouzapereira@gmail.com',
        'Grupo Fabriciatto',
   false   ),
      new Cliente(
        '2',
        'Efigênia Gonçalves de Araújo',
        '+55064921322414',
        'efizinhagoncalves@hotmail.com',
        'Grupo Geral',false,
      ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto', false
      ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ), new Cliente(
        '1',
        'Tiago Souza Pereira',
        '+55064981222112',
        'tiagosouzapereira@gmail.com',
        'Grupo Fabriciatto',
   false   ),
      new Cliente(
        '2',
        'Efigênia Gonçalves de Araújo',
        '+55064921322414',
        'efizinhagoncalves@hotmail.com',
        'Grupo Geral',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),
      new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),    new Cliente(
        '3',
        'Armando Zanatto',
        '+55064921322414',
        'armandinhonaosoucantor@gmail.com',
        'Grupo Zanatto',
   false   ),

    ];


  }

}
