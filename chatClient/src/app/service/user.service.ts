import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';

@Injectable()
export class UserService {
  private userUrl = 'http://localhost:5000/user/';

  private userConnected: User;

  private friendSelected: User;

  constructor(private http: HttpClient) {
  }

  login(username, password): Observable<User> {
    const params = {
      username: username,
      password: password
    };
    return this.http.post(this.userUrl + 'login', JSON.stringify(params), {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    }).map(res => {
      this.userConnected = res[0];
      return this.userConnected;
    })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUserConnected() {
    return this.userConnected;
  }

  getFriendSelected(): User {
    return this.friendSelected;
  }

  setFriendSelected(value: User) {
    this.friendSelected = value;
  }
}
