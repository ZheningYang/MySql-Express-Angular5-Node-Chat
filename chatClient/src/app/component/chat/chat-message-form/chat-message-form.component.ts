import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../model/user.model';
import {ChatService} from '../../../service/chat.service';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.css']
})
export class ChatMessageFormComponent implements OnInit {
  messageToSend: string;
  @Input() friend: User;
  user: User = this.userService.getUserConnected();

  inProgress = false;


  constructor(private chatService: ChatService, private userService: UserService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.inProgress = true;
    this.chatService.sendMessage(this.user.user_id, this.friend.user_id, this.messageToSend).subscribe(
      data => {
        console.log(data);
      },
      errorCode => console.log(errorCode),
      () => {
        this.messageToSend = '';
        // this.clicked(this.friendsList[0]);
      }
    );
  }

}
