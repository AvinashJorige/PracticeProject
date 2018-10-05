import { fakeBackendProvider } from './_helpers/fake-backend';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { ErrorInterceptor } from './_helpers/error.interceptor';

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
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
