import { Injectable } from '@angular/core';
import { Cliente } from 'src/model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes = [
    new Cliente(
      '1',
      'Tiago Souza Pereira',
      '+55064981222112',
      'tiagosouzapereira@gmail.com',
      '1',
 false   ),
 new Cliente(
  '2',
  'Marcelo Souza Costa',
  '+55064981222112',
  'tiagosouzapereira@gmail.com',
  '1',
false   ),
new Cliente(
  '3',
  'Altamira Gonçalves',
  '+55064981222112',
  'altamira@gmail.com',
  '1',
false   ),

new Cliente(
  '4',
  'Machado de Assis',
  '+55064981222112',
  'mc@gmail.com',
  '1',
false   ),


new Cliente(
  '5',
  'Renato Russo',
  '+55064981222112',
  'rrusso@gmail.com',
  '1',
false   ),


new Cliente(
  '6',
  'Arnaldo Antunes',
  '+55064981222112',
  'rrusso@gmail.com',
  '1',
false   ),
new Cliente(
  '7',
  'Raul Souza',
  '+55064981222112',
  'rrs@gmail.com',
  '1',
false   ),

new Cliente(
  '8',
  'Mr. Carioca',
  '+55064981222112',
  'mrcarioca@gmail.com',
  '1',
false   ),

new Cliente(
  '9',
  'Misterioso Misterio',
  '+55064981222112',
  'mmisterio@gmail.com',
  '1',
false   ),

new Cliente(
  '10',
  'Péricles Periclao',
  '+55064981222112',
  'ppericles@hotmail.com',
  '1',
false   ),

new Cliente(
  '11',
  'Andressa Silva',
  '+55064981222112',
  'ppericles@hotmail.com',
  '1',
false   ),

new Cliente(
  '12',
  'Andressa Suita',
  '+55064981222112',
  'aads@hotmail.com',
  '1',
false   ),
new Cliente(
  '13',
  'Tiago Henrique Gomes',
  '+55064981222112',
  'thgomes@hotmail.com',
  '1',
false   ),
new Cliente(
  '14',
  'Marcelo Bittencourt',
  '+55064981222112',
  'marcelobittencourt@hotmail.com',
  '1',
false   ),

new Cliente(
  '15',
  'Sandro Souza ',
  '+55064981222112',
  'sandro@hotmail.com',
  '1',
false   ),new Cliente(
  '16',
  'Gustavo Lima',
  '+55064981222112',
  'embaixador@hotmail.com',
  '1',
false   ),new Cliente(
  '17',
  'Arlindo Cruz',
  '+55064981222112',
  'acruz@hotmail.com',
  '1',
false   ),new Cliente(
  '18',
  'Berlindo Cruz',
  '+55064981222112',
  'acruz@hotmail.com',
  '1',
false   ),new Cliente(
  '19',
  'Cerlindo Cruz',
  '+55064981222112',
  'acruz@hotmail.com',
  '1',
false   ),new Cliente(
  '20',
  'Derlindo Cruz',
  '+55064981222112',
  'acruz@hotmail.com',
  '1',
false   ),new Cliente(
  '21',
  'Erlindo Cruz',
  '+55064981222112',
  'acruz@hotmail.com',
  '1',
false   ),
new Cliente(
  '22',
  'Marisa Monte',
  '+55064981222112',
  'beijaeu@hotmail.com',
  '1',
false   ),
  ];
  constructor() { }

  getAllClientes():Array<Cliente>{
    return  this.clientes


  }
  setCliente(){


  }
  addCliente(cliente:Cliente){
    cliente.identificador = this.clientes.length+""
    this.clientes.push(cliente);
  }

}
