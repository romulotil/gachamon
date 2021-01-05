import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

import { GlobalService } from './services/global.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    GlobalService, 
    StorageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
