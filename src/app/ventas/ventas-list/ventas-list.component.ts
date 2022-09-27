import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ventas } from 'src/app/interface/ventas';
import { VentasService } from 'src/app/service/ventas.service';

@Component({
  selector   : 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls  : ['./ventas-list.component.css'],
})
export class VentasListComponent implements OnInit, OnDestroy {

  ventas: Ventas[] = [];
  totales!: number;
  subscription!: Subscription;

  constructor(public provider: VentasService) { }

  ngOnInit() {
    this.getVentas();
    this.subscription = this.provider.refresh$.subscribe(() => { this.getVentas(); })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getVentas(): void {
    this.provider.getVentas().subscribe(datos => {
      this.ventas = datos;
    });
  }

  delVentas(venta: any): void {
    if(confirm("Seguro que desea borrar este registro?")){
      this.provider.delVentas(venta).subscribe();
    }
  }

  calcularTotales(): number {
    let total:number = 0;
    for (let i = 0; i < this.ventas.length; i++) {
      let ventasNum = parseInt(this.ventas[i].monto);
      total += ventasNum;
    }
    this.totales = total;
    this.provider.totales = this.totales;
    return this.totales;
  }

}