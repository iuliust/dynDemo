import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule, AuthService } from './shared';

import { AppComponent } from './app.component';
import { CoinTosserComponent, PileComponent, FaceComponent } from './coin-tosser/coin-tosser.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component, GreeterComponent } from './example3/example3.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinTosserComponent,
    PileComponent,
    FaceComponent,
    LoginViewComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
