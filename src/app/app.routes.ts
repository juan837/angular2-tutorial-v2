//importamos los componentes base que utilizaremos para crear
// el elemento de las rutas
import { Routes, RouterModule } from '@angular/router';

//importamos los componentes que vamos a desplegar en cada ruta
import { PaginaComponent } from './pagina/pagina.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PaginaRoutes } from './pagina/pagina.routes';

//creamos un objeto con un array que contiene la url que tendra la ruta
//y el componente que cargara cuando se indique en la url o un enlace
const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Cuando se ingrese la url http://localhost:4200 de redirige a la url http://localhost:4200/inicio
  ...PaginaRoutes, // De este modo agregamos nuestro grupo de rutas del componente Pagina a nuestra lista de rutas actuales
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];

//exportamos la variable a ser inyectada en nuestro modulo
export const routing = RouterModule.forRoot(routes);