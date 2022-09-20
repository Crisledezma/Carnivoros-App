import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
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
  baseUrl: string = 'http://localhost:3000';
  // baseUrl: string = 'https://crudcrud.com/api/0071013619dc4a988bda06ba35e310ea';
  // baseUrl: string = 'https://my-json-server.typicode.com/Crisledezma/jsonCarnivoros'
  
  getVentas(): Subscription {
    const url = `${this.baseUrl}/ventas`;
    return this.http.get(url).subscribe(datos => this.ventas = datos);
  }

  updateVentas(fecha: string, monto: number): Subscription {
    const venta = {"fecha": fecha,"monto":monto};
    const url = `${this.baseUrl}/ventas`;
    return this.http.post<Ventas>(url, venta).subscribe();
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

  editVentas(venta: Ventas) {
    console.log(venta);
    return this.http.put(`${this.baseUrl}/ventas/${venta.id}`,venta)
  }

  delVentas(id:string): Subscription {
    return this.http.delete(`${this.baseUrl}/ventas/${id}`).subscribe();
  }

}