import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ChatComponent } from '../chat/chat.component';
import { ListComponent } from './../list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../service/chat.service';

@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
  
  ],
  providers: [
    HomeComponent,
    ChatComponent,
    ListComponent,
    ChatService
  ]
})
export class HomeModule { }
