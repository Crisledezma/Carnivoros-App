import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interface/ventas';
import { VentasService } from 'src/app/service/ventas.service';

@Component({
  selector   : 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls  : ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  totales: number = this.provider.getTotales();

  ventas: Ventas[] = [];

  constructor(public provider: VentasService) { }

  ngOnInit(): void {
    this.provider.getVentas();
  }


}
