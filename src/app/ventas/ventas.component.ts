import { Component, OnInit } from '@angular/core';
import { VentasService } from '../service/ventas.service';

@Component({
  selector   : 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls  : ['./ventas.component.css']
})
export class VentasComponent implements OnInit {


  constructor(
    public provider: VentasService
  ) { }

  ngOnInit(): void {
    this.provider.getVentas();
  }

}
