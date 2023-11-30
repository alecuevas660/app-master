import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },

  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule), canActivate:[NoAuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/auth/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/main/home/home.module').then( m => m.HomePageModule), canActivate:[AuthGuard]
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/auth/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/main/perfil/perfil.module').then( m => m.PerfilPageModule), canActivate:[AuthGuard]
  },


  {
    path: 'manejar2',
    loadChildren: () => import('./pages/main/manejar2/manejar2.module').then( m => m.Manejar2PageModule),canActivate:[AuthGuard]
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/main/mapa/mapa.module').then( m => m.MapaPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'misviajes',
    loadChildren: () => import('./pages/main/misviajes/misviajes.module').then( m => m.MisviajesPageModule),canActivate:[AuthGuard]
  },
  

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
