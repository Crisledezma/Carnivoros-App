import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { GastosComponent } from './gastos/gastos.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  { path: '', redirectTo: '/ventas', pathMatch: 'full' },
  { path: 'ventas', component: VentasComponent, data: { title: 'Ventas' } },
  { path: 'gastos', component: GastosComponent, data: { title: 'Gastos' } },
  { path: 'balance', component: BalanceComponent, data: { title: 'Balance' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
