import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../../../model/chat.model';
import {User} from '../../../model/user.model';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-chat-message-item',
  templateUrl: './chat-message-item.component.html',
  styleUrls: ['./chat-message-item.component.css']
})
export class ChatMessageItemComponent implements OnInit {

  @Input() message: Chat;
  @Input() friend: User;
  user: User = this.userService.getUserConnected();
  result = 50;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
