import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { InformacionSectionComponent } from './informacion-section/informacion-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { PaginaComponent } from './pagina/pagina.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routing  } from './app.routes';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ProductosComponent } from './pagina/productos/productos.component';
import { AcercaComponent } from './pagina/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    MenuSectionComponent,
    InformacionSectionComponent,
    FooterSectionComponent,
    PaginaComponent,
    LoginComponent,
    DashboardComponent,
    InicioComponent,
    ProductosComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
