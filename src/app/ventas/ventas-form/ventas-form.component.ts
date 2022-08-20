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

  constructor(public provider: VentasService) { }
  
  ngOnInit(): void { }

  addVentas(pVentas:Ventas) {
    this.provider.addVentas(pVentas);
    this.resetInputs();
  }

  resetInputs() {
    console.log(this.inputFecha.nativeElement.value);
    this.inputFecha.nativeElement.value = '';
    this.inputMonto.nativeElement.value = '';
  }

}