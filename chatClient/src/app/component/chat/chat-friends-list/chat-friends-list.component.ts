import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RelationshipService} from '../../../service/relationship.service';
import {User} from '../../../model/user.model';
import {UserService} from '../../../service/user.service';
import {Router} from '@angular/router';
import {ChatService} from '../../../service/chat.service';
import {Chat} from '../../../model/chat.model';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-chat-friends-list',
  templateUrl: './chat-friends-list.component.html',
  styleUrls: ['./chat-friends-list.component.css']
})
export class ChatFriendsListComponent implements OnInit {

  @Input() user: User;
  @Output()
  onFriendSelected: EventEmitter<User> = new EventEmitter<any>();

  friendsList: User[];
  friendSelected: User;
  chatList: Chat[];

  constructor(private relationshipService: RelationshipService,
              private userService: UserService,
              private chatService: ChatService,
              private router: Router) {
  }

  clicked(friend: User): void {
    this.friendSelected = friend;
    this.onFriendSelected.emit(friend);
  }


  getFriendsList() {
    this.relationshipService.getFriendsList(this.user['user_id'])
      .subscribe(
        data => {
          this.friendsList = data;
        },
        errorCode => console.log(errorCode),
        () => {
          console.log('friendSelected selected by default : ' + this.friendsList[0].username);
          this.clicked(this.friendsList[0]);
        }
      );
  }

  getLastMessagesByUserId() {
    this.chatService.getLastMessagesByUserId(this.user['user_id'])
      .subscribe(
        data => {
          this.chatList = data;
        },
        errorCode => console.log(errorCode),
        () => {
        }
      );
  }

  getLastMessageBetweenFriends(friend_id) {
    for (const chat of this.chatList) {
      if (chat.user_from_id === friend_id && chat.user_to_id === this.user.user_id) {
        return chat.message;
      }
      if (chat.user_to_id === friend_id && chat.user_from_id === this.user.user_id) {
        return 'vous : ' + chat.message;
      }
    }
  }

  ngOnInit() {
    if (this.user === null || typeof this.user === 'undefined') {
      this.router.navigate(['login']);
    } else {
      this.getFriendsList();
      this.getLastMessagesByUserId();

      Observable.interval(10).subscribe(x => {
        this.getLastMessagesByUserId();
      });
    }
  }

}
