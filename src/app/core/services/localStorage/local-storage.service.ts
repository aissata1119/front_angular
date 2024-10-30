import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private accessToken = 'token';
  constructor() { }
  getToken() {
    return localStorage.getItem(this.accessToken);
  }
  saveToken(token: string) {
    localStorage.setItem(this.accessToken, JSON.stringify(token));
  }
  destroyToken() {
    localStorage.removeItem(this.accessToken);
  }
}
