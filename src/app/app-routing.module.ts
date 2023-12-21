import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* COMPONENTS */
import { StartseiteComponent } from './pages/startseite/startseite.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

/* ROUTES */
const routes: Routes = [
  { path: 'startseite', component: StartseiteComponent },
  { path: '', redirectTo: '/startseite', pathMatch: 'full' },
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
