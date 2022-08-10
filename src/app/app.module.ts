import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { GastosComponent } from './gastos/gastos.component';
import { BalanceComponent } from './balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    GastosComponent,
    BalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
