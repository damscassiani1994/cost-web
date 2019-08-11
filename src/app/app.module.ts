import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducers, metaReducers, rootEffects } from './redux/root/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

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
    EffectsModule.forRoot(rootEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
