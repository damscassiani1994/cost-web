import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RootState } from './redux/root/state';
import { Store } from '@ngrx/store';
import { InfoUser } from './redux/model/infoUser';
import { IsLogin, IsSignOut } from './redux/loginPage/action';
import { Login } from './redux/model/login';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cost-web';

  constructor() {

  }

  ngOnInit(): void {

  }
}
