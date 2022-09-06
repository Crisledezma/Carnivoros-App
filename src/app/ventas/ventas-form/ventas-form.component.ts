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

  venta: Ventas = {
    fecha: '',
    monto: ''
  }

  ventas: Ventas[] = [];

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
    this.provider.updateVentas(pVentas);
    this.getVentas();
    this.resetInputs();
  }

  resetInputs() {
    this.inputFecha.nativeElement.value = '';
    this.inputMonto.nativeElement.value = '';
  }

}