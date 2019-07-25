import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
declare var $: any;
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.css']
})
export class NavbarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.cargarJQuery();
  }

  cargarJQuery() {
    $('.dropdown-trigger').dropdown();
    $('.sidenav').sidenav();
  }
}
