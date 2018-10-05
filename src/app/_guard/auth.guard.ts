import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	if(localStorage.getItem('currentUser')) {
		// Logged in so return true
		return true;
	}
  }
 
	this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
	return false;

}
