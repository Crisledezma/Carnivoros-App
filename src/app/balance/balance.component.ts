import { Component, OnInit } from '@angular/core';
import { GastosService } from '../service/gastos.service';
import { VentasService } from '../service/ventas.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  entradas: number = this.ventas.totales;
  salidas : number = this.gastos.totales;

  constructor(
    public ventas: VentasService,
    public gastos: GastosService
  ) { }

  ngOnInit() { }

}
