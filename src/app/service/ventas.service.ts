import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ventas } from '../interface/ventas';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  private _refresh$ = new Subject<void>();
  public totales: number = 0;
  public baseUrl: string = environment.baseUrlLocalHost3000;
  // public baseUrl: string = environment.baseUrlCrudCrud
  // public baseUrl: string = environment.baseUrlMyJsonServer

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$
  }
  
  getVentas(): Observable<Ventas[]> {
    const url = `${this.baseUrl}/ventas`;
    return this.http.get<Ventas[]>(url);
  }

  addVentas(venta: Ventas): Observable<Ventas> {
    const url = `${this.baseUrl}/ventas`;
    return this.http.post<Ventas>(url, venta)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  delVentas(id:string): Observable<Ventas> {
    return this.http.delete<Ventas>(`${this.baseUrl}/ventas/${id}`);
  }

}