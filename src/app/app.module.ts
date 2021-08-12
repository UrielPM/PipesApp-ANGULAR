import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
//Modulp Personalizado

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


//Cambiar el local de la app

import  localES  from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
import  localfr  from '@angular/common/locales/fr';
registerLocaleData( localES);
registerLocaleData( localfr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule, 
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
