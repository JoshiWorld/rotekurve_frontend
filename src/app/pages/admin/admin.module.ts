import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MitgliederComponent } from './mitglieder/mitglieder.component';
import { MitgliederTableComponent } from './mitglieder/table/table.component';
import { DatepickerDirective } from './mitglieder/table/datepicker.directive';
import { FinanzenComponent } from './finanzen/finanzen.component';
import { FinanzenTableComponent } from './finanzen/table/table.component';

@NgModule({
    declarations: [
      DashboardComponent,
      LoginComponent,
      SidebarComponent,
      MitgliederComponent,
      MitgliederTableComponent,
      DatepickerDirective,
      FinanzenComponent,
      FinanzenTableComponent
    ],
    exports: [],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class AdminModule { }
