import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector   : 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls  : ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit, OnDestroy {

  gastos: Gastos[] = [];
  totales!: number;
  subscription!: Subscription;
  
  constructor(public provider: GastosService) { }
  
  ngOnInit(): void {
    this.getGastos();
    this.subscription = this.provider.refresh$.subscribe(() => { this.getGastos(); })
  }
  
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  getGastos(): void {
    this.provider.getGastos().subscribe(datos => {
      this.gastos = datos;
    });
  }

  delGastos(gasto: any) {
    if (confirm(`Seguro que desea borrar este registro?`)) {
      this.provider.delGastos(gasto).subscribe();
    }
  }

  calcularTotales(): number {
    let total:number = 0;
    for (let i = 0; i < this.gastos.length; i++) {
      let gastosNum = parseInt(this.gastos[i].monto);
      total += gastosNum;
    }
    this.totales = total;
    this.provider.totales = this.totales;
    return this.totales;
  }

}