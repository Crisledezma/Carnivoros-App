import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gastos } from '../interface/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private _refresh$ = new Subject<void>();
  public totales: number = 0;
  public baseUrl: string = environment.baseUrlLocalHost3000;
  // public baseUrl: string = environment.baseUrlCrudCrud
  // public baseUrl: string = environment.baseUrlMyJsonServer

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  getGastos(): Observable<Gastos[]> {
    const url = `${this.baseUrl}/gastos`;
    return this.http.get<Gastos[]>(url);
  }

  addGastos(gasto: Gastos): Observable<Gastos> {
    const url = `${this.baseUrl}/gastos`;
    return this.http.post<Gastos>(url, gasto)
      .pipe(
        tap(() => {
          this._refresh$.next();
      })
    )
  }

  delGastos(id:string): Observable<Gastos> {
    return this.http.delete<Gastos>(`${this.baseUrl}/gastos/${id}`);
  }

}