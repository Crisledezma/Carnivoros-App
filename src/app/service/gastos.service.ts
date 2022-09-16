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

  gastos: any = [];
  totales: number = 0;
  baseUrl: string = 'https://my-json-server.typicode.com/Crisledezma/jsonCarnivoros'

  getGastos(): any {
    const url = `${this.baseUrl}/salidas`;
    return this.http.get(url).subscribe(datos => {this.gastos = datos;});
  }

  addGastos(fecha: string, monto: number): Observable<Gastos> {
    const gasto = {"fecha": fecha,"monto":monto};
    const url = `${this.baseUrl}/gastos`;
    this.gastos.push(gasto);
    return this.http.post<Gastos>(url, gasto);
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

}