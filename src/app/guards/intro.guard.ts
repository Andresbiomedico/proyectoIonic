import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Storage} from '@ionic/storage';
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor (private storage:Storage, private router:Router){}
  async canActivate()
  {
   const isIntroShowed=await this.storage.get('isIntroShowed');
   if (isIntroShowed){
    return true;
   }
   else{
     this.router.navigateByUrl('/intro')
   }
    
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
