import { Router } from '@angular/router';

import { inject } from '@angular/core';
import {UserService} from '../services/userService/user.service';
export function authGuard (){
  const userService = inject(UserService)
  const router = inject(Router)
  if (userService.isAuthenticated()) {
    return true;
  }
  console.log("connecte toi champion")
  router.navigate(['/login']);
  return false;
}