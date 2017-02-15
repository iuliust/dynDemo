import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginViewComponent } from './login-view/login-view.component';
import { IndexViewComponent } from './index-view/index-view.component';

const routes: Routes = [
    { path: '', component: IndexViewComponent },
    { path: 'login', component: LoginViewComponent },
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
