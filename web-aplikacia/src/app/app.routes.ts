// // src/app/app.routes.ts
// import { Routes } from '@angular/router';
// import { LoginComponent } from '@/app/login/login.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component:LoginComponent },
//   // Add more routes as needed
// ];


// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

// Add route guard function
const authGuard = () => {
  const authService = inject(AuthService);
  return authService.isAuthenticated() || false;
};

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [() => authGuard()]
  },
  { path: '**', redirectTo: '/login' } // Catch all route
];