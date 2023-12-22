import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* COMPONENTS */
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/admin/login/login.component';

/* ROUTES */
const routes: Routes = [
  /* PUBLIC */
  { path: 'startseite', component: StartseiteComponent },
  { path: '', redirectTo: '/startseite', pathMatch: 'full' }, // redirect '/' route to '/startseite'

  /* ADMIN - PUBLIC */
  { path: 'login', component: LoginComponent },

  /* ADMIN - PROTECTED */
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect '/admin' route to '/admin/dashboard'
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
