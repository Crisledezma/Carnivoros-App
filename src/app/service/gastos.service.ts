import { Injectable } from '@angular/core';
import { Gastos } from '../interface/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor() { }

  gastos: Gastos[] = [
    { "fecha": "08/10/2022", "monto": '21250' },
    { "fecha": "08/11/2022", "monto": '12375' },
    { "fecha": "08/12/2022", "monto": '13280' }
  ]

  getTotales():number {
    let total:number = 0;
    for (let i = 0; i < this.gastos.length; i++) {
      let gastosNum = parseInt(this.gastos[i].monto);
      total += gastosNum;
    }
    return total;
  }

  getGastos():Gastos[] {
    return this.gastos;
  }

  addGastos(pGastos:Gastos) {
    this.gastos.push(pGastos);
  }

}
