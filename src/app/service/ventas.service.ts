import { Injectable } from '@angular/core';
import { Ventas } from '../interface/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor( ) { }

  ventas: Ventas[] = [
    { "fecha": "08/10/2022", "monto": '70000' },
    { "fecha": "08/11/2022", "monto": '75000' },
    { "fecha": "08/12/2022", "monto": '80000' }
  ]
  
  getTotales():number {
    let total:number = 0;
    for (let i = 0; i < this.ventas.length; i++) {
      let ventasNum = parseInt(this.ventas[i].monto);
      total += ventasNum;
    }
    return total;
  }

  getVentas():Ventas[] {
    return this.ventas;
  }

  addVentas(pVentas:Ventas) {
    this.ventas.push(pVentas);
  }

}