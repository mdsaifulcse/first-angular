import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginLayoutComponent} from './layout/auth/login/login.component'

export const AppRoutes: Routes = [
{
  path:'',
  component:LoginLayoutComponent,
  children:[
    {
      path:'login',
      loadChildren:()=>import('./frontned/login/login.module').then(m=>m.LoginModule)
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes,{
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
