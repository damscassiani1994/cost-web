import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarMenuComponent } from './components/navbar-menu/navbar-menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarMenuComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
