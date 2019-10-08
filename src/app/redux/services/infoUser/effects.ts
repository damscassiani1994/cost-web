import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { InfoUserService } from 'src/app/services/info-user.service';
import { Effect, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { LoadInfoUser, ErrorInfoUser } from './actions';


@Injectable()
export class InfoUserEffect {

  constructor(private $action: Action, private infoUserServices: InfoUserService) {}
}
