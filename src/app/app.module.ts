import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DynamicComponent, PileComponent, FaceComponent } from './dynamic/dynamic.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { IndexViewComponent } from './index-view/index-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    PileComponent,
    FaceComponent,
    LoginViewComponent,
    IndexViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
