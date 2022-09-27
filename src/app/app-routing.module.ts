import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { GastosComponent } from './gastos/gastos.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  { path: '', redirectTo      : '/ventas', pathMatch: 'full' },
  { path: 'ventas', component : VentasComponent },
  { path: 'gastos', component : GastosComponent },
  { path: 'balance', component: BalanceComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
