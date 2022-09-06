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

  ventas: Ventas[] = [];
  baseUrl: string = 'https://my-json-server.typicode.com/Crisledezma/jsonCarnivoros'
  
  getVentas():Observable<Ventas[]> {
    const url = `${this.baseUrl}/ventas`;
    return this.http.get<Ventas[]>(url);
  }

  updateVentas(pVentas:Ventas): Observable<Ventas> {
    const url = `${this.baseUrl}/ventas`
    this.ventas.push(pVentas);
    return this.http.post<Ventas>(url, pVentas);
  }

}