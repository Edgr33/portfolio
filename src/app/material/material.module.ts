import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
