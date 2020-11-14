import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing'; // Servicios creados por nosotros para las distintas rutas
import { HttpClientModule } from '@angular/common/http'; // Módulo necesario para los servicios HTTP
import { FormsModule } from '@angular/forms'; // Módulo necesario para la interacción de los formularios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    ContactComponent,
    ProjectsComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing, // Cargado...
    HttpClientModule, // Cargado...
    FormsModule // Cargado...
  ],
  providers: [
    appRoutingProviders // Cargado...
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
