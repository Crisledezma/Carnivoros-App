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


  getGastos():Observable<Gastos[]> {
    const url = `${this.baseUrl}/salidas`;
    return this.http.get<Gastos[]>(url);
  }

  addGastos(pGastos: Gastos): Observable<Gastos> {
    const url = `${this.baseUrl}/gastos`;
    this.gastos.push(pGastos);
    return this.http.post<Gastos>(url, pGastos);
  }

}
