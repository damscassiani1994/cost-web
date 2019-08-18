import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';
import { IsSignOut } from 'src/app/redux/loginPage/action';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {
  public user: IUser;

  constructor(private authServices: AuthService, private store: Store<RootState>,
              private router: Router) { }

  ngOnInit() {
    this.user = this.authServices.getUserObject();
    this.cargarJQuery();
  }

  cargarJQuery() {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
  }

  accionSignOut() {
    console.log('llegue aqui');
    this.store.dispatch(new IsSignOut({username: '', password: ''}));
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
