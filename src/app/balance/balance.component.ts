import { Component, OnInit } from '@angular/core';
import { Gastos } from '../interface/gastos';
import { Ventas } from '../interface/ventas';
import { GastosService } from '../service/gastos.service';
import { VentasService } from '../service/ventas.service';

@Component({
  selector   : 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls  : ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  ventas: Ventas[] = [];
  gastos: Gastos[] = [];
  entradas: number = this.ventasService.totales;
  salidas: number = this.gastosService.totales;

  constructor(
    public ventasService: VentasService,
    public gastosService: GastosService
  ) { }

  ngOnInit() {
    this.getVentas();
    this.getGastos();
  }

  getVentas() {
    this.ventasService.getVentas().subscribe(datos => this.ventas = datos);
  }

  getGastos() {
    this.gastosService.getGastos().subscribe(datos => this.gastos = datos);
  }

  calcularVentas(): number {
    let total:number = 0;
    for (let i = 0; i < this.ventas.length; i++) {
      let ventasNum = parseInt(this.ventas[i].monto);
      total += ventasNum;
    }
    this.entradas = total;
    return this.entradas;
  }

  calcularGastos(): number {
    let total:number = 0;
    for (let i = 0; i < this.gastos.length; i++) {
      let gastosNum = parseInt(this.gastos[i].monto);
      total += gastosNum;
    }
    this.salidas = total;
    return this.salidas;
  }

}
