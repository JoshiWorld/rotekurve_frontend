import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        DashboardComponent,
        LoginComponent,
        SidebarComponent
    ],
    exports: [],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class AdminModule { }
