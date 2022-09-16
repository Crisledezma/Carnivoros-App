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

}