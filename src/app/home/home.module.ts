import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsService } from '../core/contacts/contacts.service';
import { ChatComponent } from './+components/chat/chat.component';
import { ListComponent } from './+components/list/list.component';
import { ConversationService } from '../core/conversation/conversation.service';

@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    ConversationService,
    ContactsService,
  ]
})
export class HomeModule { }
