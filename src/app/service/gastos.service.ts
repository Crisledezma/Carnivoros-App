import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Gastos } from '../interface/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(
    private http: HttpClient
  ) { }

  gastos: any = [];
  totales: number = 0;
  baseUrl: string = 'http://localhost:3000'
  // baseUrl: string = 'https://crudcrud.com/api/0071013619dc4a988bda06ba35e310ea'
  // baseUrl: string = 'https://my-json-server.typicode.com/Crisledezma/jsonCarnivoros'

  getGastos(): Subscription {
    const url = `${this.baseUrl}/gastos`;
    return this.http.get(url).subscribe(datos => {this.gastos = datos;});
  }

  addGastos(fecha: string, monto: number): Subscription {
    const gasto = {"fecha": fecha,"monto":monto};
    const url = `${this.baseUrl}/gastos`;
    return this.http.post<Gastos>(url, gasto).subscribe();
  }

  calcularTotales(): number {
    let total:number = 0;
    for (let i = 0; i < this.gastos.length; i++) {
      let gastosNum = parseInt(this.gastos[i].monto);
      total += gastosNum;
    }
    this.totales = total;
    return this.totales;
  }

  editGastos(id:string) {
    
  }

  delGastos(id:string): Subscription {
    return this.http.delete(`${this.baseUrl}/gastos/${id}`).subscribe();
  }

}