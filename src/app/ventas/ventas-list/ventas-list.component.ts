import { Component, OnInit } from '@angular/core';
import { Ventas } from 'src/app/interface/ventas';
import { VentasServiceService } from 'src/app/service/ventas-service.service';

@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  ventas: Ventas[] = [];

  constructor(public provider: VentasServiceService) { }

  ngOnInit(): void {
    this.provider.getVentas();
    this.getVentas();
  }

  getVentas() {
    this.provider.getVentas()
      .subscribe((pVentas: any) => {
        pVentas.forEach((row: Ventas) => {
          this.ventas.push(row);
        })
    })
  }

}
