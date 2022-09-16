import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from '../interface/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(
    private http: HttpClient
  ) { }

  ventas: any = [];
  totales: number = 0;
  baseUrl: string = 'https://my-json-server.typicode.com/Crisledezma/jsonCarnivoros'
  
  getVentas(): any {
    const url = `${this.baseUrl}/ventas`;
    return this.http.get(url).subscribe(datos => this.ventas = datos);
  }

  updateVentas(fecha: string, monto: number): Observable<Ventas> {
    const venta = {"fecha": fecha,"monto":monto};
    const url = `${this.baseUrl}/ventas`;
    this.ventas.push(venta);
    return this.http.post<Ventas>(url, venta);
  }

  calcularTotales(): number {
    let total:number = 0;
    for (let i = 0; i < this.ventas.length; i++) {
      let ventasNum = parseInt(this.ventas[i].monto);
      total += ventasNum;
    }
    this.totales = total;
    return this.totales;
  }

}