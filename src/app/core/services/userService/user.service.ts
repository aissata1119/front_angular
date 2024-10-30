import { Injectable } from '@angular/core';
import {LocalStorageService} from '../localStorage/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService: LocalStorageService) { }
  isAuthenticated(): boolean {
    const token = this.localStorageService.getToken();
    if (!token) {
      console.log('login plz');
    }
    return !!token;
  }

}