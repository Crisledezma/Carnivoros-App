import { Component, OnInit } from '@angular/core';
import { VentasService } from 'src/app/service/ventas.service';

@Component({
  selector   : 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls  : ['./ventas-list.component.css']
})
export class VentasListComponent implements OnInit {

  constructor(public provider: VentasService) { }

  ngOnInit(): void { }

  getVentas() {
    setTimeout(() => {
      this.provider.getVentas();
    },500)
  }

  delVentas(venta: string) {
    if(confirm("Seguro que desea borrar este registro?")){
      this.provider.delVentas(venta);
    }
  }

}