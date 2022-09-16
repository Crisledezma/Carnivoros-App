import { Component, OnInit, ViewChild } from '@angular/core';
import { VentasService } from '../../service/ventas.service';
import { Ventas } from './../../interface/ventas';

@Component({
  selector   : 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls  : ['./ventas-form.component.css']
})
export class VentasFormComponent implements OnInit {
  
  venta: Ventas = { fecha: '', monto: '' };

  constructor(public provider: VentasService) { }
  
  ngOnInit(): void { }

}