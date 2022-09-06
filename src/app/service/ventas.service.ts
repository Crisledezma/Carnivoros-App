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

  updateVentas(pVentas:Ventas) {
    this.ventas.push(pVentas);
  }

}