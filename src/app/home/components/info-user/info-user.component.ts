import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';
import { InfoUserService } from 'src/app/services/info-user.service';
import { IUser } from 'src/app/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  public user: IUser;
  public userFormGroup: FormGroup;

  constructor(private store: Store<RootState>, private infoUserServices: InfoUserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    $(document).ready(() => {
      $('.collapsible').collapsible();
    });
    // Generamos formulario y obteneos la informacion de usuario;
    this.generateFormUserInfo();
  }

  generateFormUserInfo() {
    this.store.select('auth').subscribe(
      (response) => {
        if (response.auth && response.auth.user) {
          this.userFormGroup = this.formBuilder.group({
            names: response.auth.user.name,
            lastNames: response.auth.user.lastName,
            username: response.auth.user.username,
            email: response.auth.user.email
          });
        }
      },
      (err) => {
        // Se ejecuta action de error de usuario
        console.log(err);
      }
    );

    return this.userFormGroup.value;
  }

  isActiveField(prop) {
    if (this.userFormGroup.get(prop).value) {
      return 'active';
    }
    return 'inactive';
  }

}
