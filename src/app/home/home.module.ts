import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ConversationService } from '../core/services/conversation/conversation.service';
import { ContactsService } from '../core/services/contacts/contacts.service';
import { ChatComponent } from './+components/chat/chat.component';
import { ListComponent } from './+components/list/list.component';

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
