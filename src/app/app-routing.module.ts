import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './models/role.models';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pages/pedido/pedido.module').then( m => m.PedidoPageModule),
    canActivate: [AuthGuard], 
    data: {roles: [Role.admin]}
  },
  {
    path: 'gira',
    loadChildren: () => import('./pages/gira/gira.module').then( m => m.GiraPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./pages/clientes/clientes.module').then( m => m.ClientesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'nuevocliente',
    loadChildren: () => import('./pages/nuevocliente/nuevocliente.module').then( m => m.NuevoclientePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'gira',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
