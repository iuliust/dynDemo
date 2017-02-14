import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DynamicComponent, PileComponent, FaceComponent } from './dynamic/dynamic.component';
import { LoginViewComponent } from './login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    PileComponent,
    FaceComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
