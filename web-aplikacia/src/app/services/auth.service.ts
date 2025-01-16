import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AuthResult {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.getStoredAuthState());
  private errorMessageSubject = new BehaviorSubject<string>('');
  
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private router: Router) {
    if (!this.getStoredAuthState()) {
      this.router.navigate(['/login']);
    }
  }

  private getStoredAuthState(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  login(username: string, password: string): AuthResult {
    this.errorMessageSubject.next('');

    if (username === 'admin' && password === 'admin') {
      this.isAuthenticatedSubject.next(true);
      localStorage.setItem('isAuthenticated', 'true');
      return { success: true, message: 'Login successful' };
    }

    const message = 'Username or password is incorrect';
    this.errorMessageSubject.next(message);
    return { success: false, message };
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isAuthenticated');
    this.errorMessageSubject.next('');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}