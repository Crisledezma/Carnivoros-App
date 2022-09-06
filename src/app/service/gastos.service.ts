import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gastos } from '../interface/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(
    private http: HttpClient
  ) { }

  gastos: Gastos[] = [];
  baseUrl: string = 'https://my-json-server.typicode.com/Crisledezma/jsonCarnivoros'

  getTotales():number {
    let total:number = 0;
    for (let i = 0; i < this.gastos.length; i++) {
      let gastosNum = parseInt(this.gastos[i].monto);
      total += gastosNum;
    }
    return total;
  }

  getGastos():Observable<Gastos[]> {
    const url = `${this.baseUrl}/salidas`;
    return this.http.get<Gastos[]>(url);
  }

  addGastos(pGastos:Gastos) {
    this.gastos.push(pGastos);
  }

}
