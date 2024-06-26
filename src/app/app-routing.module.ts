import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    ...canActivate(() => redirectLoggedInTo(['/']))
  },
  {
    path: '',//pagina inicial
    loadChildren: () => import('./finance/finance.module').then( m => m.FinanceModule ),
    ...canActivate(() => redirectUnauthorizedTo(['/auth']))
  },//!falta pagina 404 o redirigir a market directamente
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
