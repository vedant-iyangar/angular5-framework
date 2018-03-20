import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService {

  canActivate(): boolean {
    console.log('%cRoute activation checking...', 'background: #000; color: #00ff00')
    return true;
  }

}
