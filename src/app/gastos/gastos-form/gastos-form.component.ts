import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector   : 'app-gastos-form',
  templateUrl: './gastos-form.component.html',
  styleUrls  : ['./gastos-form.component.css']
})
export class GastosFormComponent implements OnInit {
  
  gasto: Gastos = { fecha: '', monto: '' };

  constructor(public provider: GastosService) { }

  ngOnInit(): void { }

}