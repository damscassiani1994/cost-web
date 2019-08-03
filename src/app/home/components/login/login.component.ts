import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/redux/model/login';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';
import { IsLogin } from 'src/app/redux/loginPage/action';
import { AlertMessage } from 'src/app/util/messages';
import { Router } from '@angular/router';
import { Auth } from 'src/app/redux/model/auth';
import { exhaustMap, exhaust, map } from 'rxjs/operators';
declare var M: any;
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public auth: Login;


  constructor(private store: Store<RootState>, private router: Router, private cd: ChangeDetectorRef) {
    M.Toast.dismissAll();
   }

  ngOnInit() {
    this.auth = {username: '', password: ''};
  }

  alertField(nameField) {
    M.toast({html: AlertMessage.requiredField(nameField), classes: AlertMessage.classes});
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(new IsLogin(this.auth));
  }
}
