import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';

import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    StartseiteComponent
  ],
  imports: [
    CommonModule,
    AdminModule
  ]
})
export class PagesModule { }
