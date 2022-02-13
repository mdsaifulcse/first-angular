import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginLayoutComponent} from './layout/auth/login/login.component'
import {FrontendLayoutComponent} from './layout/frontend/frontend.component'

export const AppRoutes: Routes = [
{
  path:'',
  component:FrontendLayoutComponent,
  loadChildren:()=>import('./frontend/home/home.module').then(m=>m.HomeModule)
},
{
  path:'',
  component:FrontendLayoutComponent,
  children:[
    {
      path:'home',
      loadChildren:()=>import('./frontend/home/home.module').then(m=>m.HomeModule)
    }
  ]
},
{
  path:'',
  component:LoginLayoutComponent,
  children:[
    {
      path:'login',
      loadChildren:()=>import('./frontend/login/login.module').then(m=>m.LoginModule)
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
