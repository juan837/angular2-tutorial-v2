//Importamos el componente Routes del core de angular
import { Routes } from '@angular/router';

//Importamos los componentes de la seccion pagina
import { PaginaComponent } from './pagina.component';
import { AcercaComponent } from './acerca/acerca.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';

// Declaramos la ruta principal inicio y sus rutas hijas
export const PaginaRoutes: Routes = [
  { path: 'inicio', component: PaginaComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full'},
      { path: 'acerca', component: AcercaComponent },
      { path: 'index', component: InicioComponent },
      { path: 'productos', component: ProductosComponent }
    ]
  },
];