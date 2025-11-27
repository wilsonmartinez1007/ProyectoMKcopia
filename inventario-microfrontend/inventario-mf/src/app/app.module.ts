import { NgModule, ApplicationRef, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';  

import { AppComponent } from './app.component';

@NgModule({
  declarations: [],          // 👈 seguimos sin declarar AppComponent
  imports: [BrowserModule,  HttpClientModule,  AppComponent],
  providers: [],
  bootstrap: [],             // 👈 se deja vacío
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    // 👈 aquí SÍ arrancamos el standalone root
    appRef.bootstrap(AppComponent);
  }
}
