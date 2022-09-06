import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interface/ventas';
import { VentasService } from 'src/app/service/ventas.service';

@Component({
  selector   : 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls  : ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  totales: number = 0;
  ventas: Ventas[] = [];

  constructor(public provider: VentasService) { }

  ngOnInit(): void {
    this.provider.getVentas().subscribe(datos => this.ventas = datos);
    this.getTotales();
  }
  
  getTotales(): void {
    setTimeout( () => {
      this.calcularTotales();
    }, 500)
  }

  calcularTotales(): void {
    let total:number = 0;
    for (let i = 0; i < this.ventas.length; i++) {
      let ventasNum = parseInt(this.ventas[i].monto);
      total += ventasNum;
    }
    this.totales = total;
  }

}
