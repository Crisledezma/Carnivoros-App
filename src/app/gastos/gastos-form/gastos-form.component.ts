import { Component, OnInit, ViewChild } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector   : 'app-gastos-form',
  templateUrl: './gastos-form.component.html',
  styleUrls  : ['./gastos-form.component.css']
})
export class GastosFormComponent implements OnInit {

  @ViewChild('fecha') inputFecha:any;
  @ViewChild('monto') inputMonto:any;

  constructor(public provider: GastosService) { }

  gastos: Gastos[] = [];
  gasto: Gastos = { fecha: '', monto: '' };

  ngOnInit(): void {
    this.getGastos();
  }

  getGastos() {
    this.provider.getGastos().subscribe(data => this.gastos = data);
  }

  addGastos(pGastos:Gastos) {
    this.provider.addGastos(pGastos);
    this.gastos.push(pGastos);
    this.resetInputs();
  }

  resetInputs() {
    this.inputFecha.nativeElement.value = '';
    this.inputMonto.nativeElement.value = '';
  }


}
