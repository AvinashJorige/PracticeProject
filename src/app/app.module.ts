import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Layout import
import { SiteLayoutComponent } from './_layout/site-layout/site-layout/site-layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsersComponent } from './component/users/users.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer/site-footer.component';
import { RegisterComponent } from './component/register/register.component';

// Component Import
import { LoginComponent } from './component/login/login.component';

// Route Import
import { routing } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SiteLayoutComponent,
    DashboardComponent,
    UsersComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
