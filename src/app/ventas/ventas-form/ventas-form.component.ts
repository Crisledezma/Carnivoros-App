import { Component, OnInit } from '@angular/core';
import { VentasServiceService } from './../../service/ventas-service.service';
import { Ventas } from './../../interface/ventas';

@Component({
  selector   : 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls  : ['./ventas-form.component.css']
})
export class VentasFormComponent implements OnInit {

  constructor(public provider: VentasServiceService) { }

  ventas: Ventas[] = [];
  venta : Ventas   = { fecha: '', monto: '' };

  
  ngOnInit(): void { }

  setVentas(pFecha: string, pMonto: string) {
    this.venta = { "fecha": pFecha, "monto": pMonto }
    this.provider.setVentas(this.venta)
    this.provider.getVentas();
  }

}
