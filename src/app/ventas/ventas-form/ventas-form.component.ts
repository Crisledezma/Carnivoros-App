import { Component, OnInit, ViewChild } from '@angular/core';
import { VentasService } from '../../service/ventas.service';
import { Ventas } from './../../interface/ventas';

@Component({
  selector   : 'app-ventas-form',
  templateUrl: './ventas-form.component.html',
  styleUrls  : ['./ventas-form.component.css']
})
export class VentasFormComponent implements OnInit {

  @ViewChild('fecha') inputFecha:any;
  @ViewChild('monto') inputMonto:any;

  ventas: Ventas[] = [];
  venta: Ventas = { fecha: '', monto: '' };

  constructor(
    public provider: VentasService
  ) { }
  
  ngOnInit(): void {
    this.getVentas();
  }

  getVentas() {
    this.provider.getVentas().subscribe(data => this.ventas = data);
  }

  addVentas(pVentas:Ventas) {
    this.provider.updateVentas(pVentas)
    this.provider.ventas.push(pVentas);
    this.ventas.push(pVentas);
    this.resetInputs();
  }

  resetInputs() {
    this.inputFecha.nativeElement.value = '';
    this.inputMonto.nativeElement.value = '';
  }

}