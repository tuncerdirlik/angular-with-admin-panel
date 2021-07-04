import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
    if (!this.authService.authenticated) {
        this.router.navigateByUrl("/admin/auth"); // kullanıcı giriş yapmadı, login sayfasına yönlendirildi
        return false;
    }

    return true;

    //return true;
  }
}