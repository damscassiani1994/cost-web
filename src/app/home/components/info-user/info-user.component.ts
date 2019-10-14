import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';
import { InfoUserService } from 'src/app/services/info-user.service';
import { IUser } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {
  public user: IUser;
  public userFormGroup: FormGroup;
  public infoIncomeFormGroup: FormGroup;
  public infosIncomes: any = [1, 2, 3];

  constructor(private store: Store<RootState>, private infoUserServices: InfoUserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    $(document).ready(() => {
      $('.collapsible').collapsible();
    });
    // Generamos formulario y obteneos la informacion de usuario;
    this.generateFormUserInfo();
    // Generamos forumulario y obtenemos la informacion de los ingresos del usuario
    this.getFormIncome();
  }

  generateFormUserInfo() {
    this.store.select('auth').subscribe(
      (response) => {
        if (response.auth && response.auth.user) {
          this.userFormGroup = this.formBuilder.group({
            names: [response.auth.user.name, [Validators.required]],
            lastNames: [response.auth.user.lastName],
            username: [response.auth.user.username, Validators.required],
            email: [response.auth.user.email, Validators.required]
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

  getFormIncome() {
    this.infoIncomeFormGroup = this.formBuilder.group({
      income: [],
      period: [15]
    });
  }

  isActiveField(prop, fg: FormGroup) {
    if (fg.get(prop).value) {
      return 'active';
    }
    return 'inactive';
  }

}
