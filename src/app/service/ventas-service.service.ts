import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ventas } from '../interface/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasServiceService {

  constructor( private http: HttpClient ) { }

  url: string = 'http://localhost:8000/ventas';
  ventas: Ventas[] = [];

  getVentas() {
    return this.http.get(this.url);
  }

  setVentas(pRow: Ventas) {
    console.log('POST', pRow);
    return this.http.post(this.url, pRow).subscribe();
  }
}
