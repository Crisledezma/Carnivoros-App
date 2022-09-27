import { Component, OnInit } from '@angular/core';
import { VentasService } from '../../service/ventas.service';
import { Ventas } from './../../interface/ventas';

@Component({
  selector   : 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls: ['./ventas-form.component.css'],
})
export class VentasFormComponent implements OnInit {
  
  constructor(public provider: VentasService) { }
  
  venta: Ventas = { fecha: '', monto: '' };

  ngOnInit(): void { }

  addVentas(venta: Ventas) {
    this.provider.addVentas(venta).subscribe();
  }

}