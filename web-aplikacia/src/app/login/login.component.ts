import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html', 
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };
  loginError = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  onLogin() {
    if (this.authService.login(this.loginData.username, this.loginData.password)) {
      this.loginError = false;
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}