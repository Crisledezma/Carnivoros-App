import { GastosService } from 'src/app/service/gastos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls  : ['./gastos.component.css']
})
export class GastosComponent implements OnInit {

  constructor( public provider: GastosService) { }

  ngOnInit(): void {this.provider.getGastos();}

}
