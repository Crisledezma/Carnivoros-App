import { Component, OnInit } from '@angular/core';
import { Gastos } from 'src/app/interface/gastos';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector   : 'app-gastos-list',
  templateUrl: './gastos-list.component.html',
  styleUrls  : ['./gastos-list.component.css']
})
export class GastosListComponent implements OnInit {
  
  constructor(public provider: GastosService) { }

  ngOnInit(): void { }

}