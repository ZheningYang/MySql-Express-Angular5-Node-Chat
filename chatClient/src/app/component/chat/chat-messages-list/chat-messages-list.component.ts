import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user.model';
import {UserService} from '../../../service/user.service';
import {ChatService} from '../../../service/chat.service';
import {Chat} from '../../../model/chat.model';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-chat-messages-list',
  templateUrl: './chat-messages-list.component.html',
  styleUrls: ['./chat-messages-list.component.css']
})
export class ChatMessagesListComponent implements OnInit {

  @Input() friend: User;

  user: User = this.userService.getUserConnected();

  messagesList: Chat[];


  constructor(private userService: UserService, private chatService: ChatService) {
  }

  ngOnInit() {
    this.getMessagesList();
    Observable.interval(10).subscribe(x => {
      this.getMessagesList();
    });

  }

  getMessagesList() {
    this.chatService.getMessages(this.user.user_id, this.friend.user_id).subscribe(
      data => {
        this.messagesList = data;
      },
      errorCode => console.log(errorCode),
      () => {
      }
    );
  }
}
