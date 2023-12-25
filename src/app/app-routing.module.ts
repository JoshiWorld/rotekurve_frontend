import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* COMPONENTS */
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/admin/login/login.component';
import { MitgliederComponent } from './pages/admin/mitglieder/mitglieder.component';
import { FinanzenComponent } from './pages/admin/finanzen/finanzen.component';

/* ROUTES */
const routes: Routes = [
  /* PUBLIC */
  { path: 'aktuelles', component: StartseiteComponent },
  { path: '', redirectTo: '/aktuelles', pathMatch: 'full' }, // redirect '/' route to '/aktuelles'

  /* ADMIN - PUBLIC */
  { path: 'login', component: LoginComponent },

  /* ADMIN - PROTECTED */
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect '/admin' route to '/admin/dashboard'
      { path: 'mitglieder', component: MitgliederComponent },
      { path: 'finanzen', component: FinanzenComponent },
    ],
  },

  /* HANDLING MISMATCHED ROUTES */
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

/* MODULE IMPORTS/EXPORTS */
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
