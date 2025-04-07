import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'anonymous',
    loadComponent: () => import('./anonymous/anonymous.page').then(m => m.AnonymousPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'register-success',
    loadComponent: () => import('./register-success/register-success.page').then( m => m.RegisterSuccessPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },

  

];


