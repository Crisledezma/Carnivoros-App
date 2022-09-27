import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector   : 'app-gastos-form',
  templateUrl: './gastos-form.component.html',
  styleUrls  : ['./gastos-form.component.css']
})
export class GastosFormComponent implements OnInit {
  
  constructor(public provider: GastosService) { }
  
  gasto: Gastos = { fecha: '', monto: '' };

  ngOnInit(): void { }

  addGastos(gasto: Gastos) {
    this.provider.addGastos(gasto).subscribe();
  }

}