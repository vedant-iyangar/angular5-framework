import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {VarService} from './var.service';
import {HeaderService} from './interceptors/header.service';
import {AuthGuardService} from './guard/auth-guard.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ServiceWorkerModule.register(
      '/ngsw-worker.js',
      { enabled: environment.production }
    )
  ],
  providers: [
    VarService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderService, multi: true },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
