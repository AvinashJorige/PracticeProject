import { AuthGuard } from './_guard/auth.guard';
import { Routes, RouterModule } from '@angular/router';

// Layout import
import { SiteLayoutComponent } from './_layout/site-layout/site-layout/site-layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsersComponent } from './component/users/users.component';

// Component Import
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const appRoutes: Routes = [
  // Site routes goes here
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'about', component: UsersComponent, canActivate: [AuthGuard]},
    ]
  },

  // no layout routes
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);
