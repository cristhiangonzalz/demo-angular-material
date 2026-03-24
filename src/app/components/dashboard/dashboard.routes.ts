import {Routes} from '@angular/router';
import {Dashboard} from './dashboard';
import {Inicio} from './inicio/inicio';
import {Usuarios} from './usuarios/usuarios';
import {Reportes} from './reportes/reportes';
import {CrearUsuario} from './usuarios/crear-usuario/crear-usuario';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '', component: Dashboard, children: [
      {path: '', component: Inicio},
      {path: 'usuarios', component: Usuarios},
      {path: 'reportes', component: Reportes},
      {path: 'crear-usuario', component: CrearUsuario}
    ]
  }
]
