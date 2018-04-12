import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  user: User;

  constructor(private router: Router, private userService: UserService) {
  }

  login() {
    if (this.username !== null && this.password !== null) {
      this.userService.login(this.username, this.password)
        .subscribe(
          data => {
            this.user = data;
          },
          errorCode => console.log(errorCode)
          , () => {
            this.router.navigate(['chat']);
          }
        );
    }
  }

  ngOnInit() {
  }

}
