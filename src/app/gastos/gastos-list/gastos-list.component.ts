import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector   : 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls  : ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {

  totales: number = 0;
  gastos: Gastos[] = [];

  constructor(public provider: GastosService) { }

  ngOnInit(): void {
    this.provider.getGastos().subscribe(datos => this.gastos = datos);
    this.getTotales();
  }

  getTotales():void{
    setTimeout(() => {
      this.calcularTotales();
    },500)
  }

  calcularTotales() {
    let total: number = 0;
    for (let i = 0; i < this.gastos.length; i++) {
      let gastosNum = parseInt(this.gastos[i].monto);
      total += gastosNum;
    }
    this.totales = total;
  }

}
