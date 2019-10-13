import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/redux/root/state';
import { InfoUserService } from 'src/app/services/info-user.service';
declare var $: any;

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css']
})
export class InfoUserComponent implements OnInit {

  constructor(private store: Store<RootState>, private infoUserServices: InfoUserService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('.collapsible').collapsible();
    });
  }

}
