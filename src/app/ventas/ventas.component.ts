import { Component, OnInit } from '@angular/core';
import { Ventas } from '../interface/ventas';

@Component({
  selector   : 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls  : ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: Ventas[] = [
    { fecha: '08/10/2022', monto: 70000 },
    { fecha: '08/11/2022', monto: 75000 },
    { fecha: '08/12/2022', monto: 80000 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
