import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentasComponent } from './ventas/ventas.component';
import { GastosComponent } from './gastos/gastos.component';
import { BalanceComponent } from './balance/balance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { VentasListComponent } from './ventas/ventas-list/ventas-list.component';
import { VentasFormComponent } from './ventas/ventas-form/ventas-form.component';
import { MatButtonModule } from '@angular/material/button';
import { GastosFormComponent } from './gastos/gastos-form/gastos-form.component';
import { GastosListComponent } from './gastos/gastos-list/gastos-list.component';
import { FormsModule } from '@angular/forms';
import { VentasService } from './service/ventas.service';
import { GastosService } from './service/gastos.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    GastosComponent,
    BalanceComponent,
    NavbarComponent,
    VentasListComponent,
    VentasFormComponent,
    GastosFormComponent,
    GastosListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    GastosService,
    VentasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
