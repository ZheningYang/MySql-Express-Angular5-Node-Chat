import {Component, OnInit, OnDestroy} from '@angular/core';
import {ChatService} from '../../service/chat.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user.model';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  connection;
  user: User = this.userService.getUserConnected();
  friend: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private chatService: ChatService,
              private userService: UserService) {
  }

  friendWasSelected(friend: User) {
    this.friend = friend;
    this.userService.setFriendSelected(friend);
  }

  // sendMessage() {
  //   this.chatService.sendMessage(this.message);
  //   this.message = '';
  // }

  ngOnInit() {

    // this.connection = this.chatService.getMessages().subscribe(message => {
    //   this.messages.push(message);
    // });

    // this.sub = this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // Defaults to 0 if no query param provided.
    //     this.toto = +params['toto'] || 0;
    //   });

    // this.connection = this.route.queryParams
    //   .subscribe(params => {
    //     this.user = JSON.parse(params['user']);
    //   });
  }

  ngOnDestroy() {
    // this.connection.unsubscribe();
  }
}
