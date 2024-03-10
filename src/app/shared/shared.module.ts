import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatExpansionModule,
    MatToolbarModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    ScrollingModule
  ],

  exports: [
    MatExpansionModule,
    MatToolbarModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatTabsModule
  ]
})
export class SharedModule { }
