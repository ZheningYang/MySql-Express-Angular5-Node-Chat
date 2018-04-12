import {Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {ChatComponent} from './component/chat/chat.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent},
  {path: '**', component: PageNotFoundComponent}
];
