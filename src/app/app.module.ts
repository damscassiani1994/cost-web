import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducers, metaReducers } from './redux/root/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { LoginEffects } from './redux/auth/effects';
import { LoginSuccessEffects } from './redux/loginPage/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducers, {metaReducers} ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    EffectsModule.forRoot([AppEffects, LoginEffects, LoginSuccessEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
