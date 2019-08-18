import { Component, OnInit, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';
import { IsSignOut } from 'src/app/redux/loginPage/action';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit, DoCheck {
  public user: any;

  constructor(private authServices: AuthService, private store: Store<RootState>,
              private router: Router, private cd: ChangeDetectorRef) {}

  ngDoCheck(): void {


  }
  ngOnInit() {
    this.store.select('auth').subscribe(
      (result) => {
        if (result  && result.auth) {
          this.user = result.auth.user;
        } else {
          this.user = null;
        }

      }
    );
    this.cargarJQuery();
  }

  cargarJQuery() {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
  }

  accionSignOut() {
    this.store.dispatch(new IsSignOut({username: '', password: ''}));
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
