import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule} from '@angular/router';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './layout/auth/login/login.component';
import { FrontendComponent } from './layout/frontend/frontend.component';
import { AdminComponent } from './layout/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLayoutComponent,
    FrontendComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{
    initialNavigation: 'enabled'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
