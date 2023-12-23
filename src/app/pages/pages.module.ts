import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';

import { StartseiteComponent } from './startseite/startseite.component';
import { CardComponent } from './startseite/card/card.component';

@NgModule({
  declarations: [
    StartseiteComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    AdminModule
  ]
})
export class PagesModule { }
