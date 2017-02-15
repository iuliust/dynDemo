import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './login-view/login-view.component';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [
    { path: '', component: Example1Component },
    { path: 'login', component: LoginViewComponent }, // login
    { path: 'example1', component: Example1Component }, // coin tosser
    { path: 'example2', component: Example2Component }, // template outlet
    { path: 'front-office', loadChildren: './front-office/front-office.module#FrontOfficeModule' },
    { path: 'back-office', loadChildren: './back-office/back-office.module#BackOfficeModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
