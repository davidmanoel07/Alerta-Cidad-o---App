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
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat.page').then(m => m.ChatPage),
  },
  {
    path: 'chat-anonymous', // **Adicione esta rota**
    loadComponent: () => import('./chat-anonymous/chat-anonymous.page').then(m => m.ChatAnonymousPage),
  },
  {
    path: 'register-success',
    loadComponent: () => import('./register-success/register-success.page').then(m => m.RegisterSuccessPage),
  },

  {
    path: 'reset-number',
    loadComponent: () => import('./reset-number/reset-number.page').then(m => m.ResetNumberPage),
  },


  {
    path: 'occurrences',
    loadComponent: () =>
      import('./ocorrencia-suporte-relatar/occurrences/occurrences.page').then(
        m => m.OccurrencesPage
      ),
  },

  {
    path: 'suport',
    loadComponent: () => import('./ocorrencia-suporte-relatar/pagina/suport/suport.page').then(m => m.SuportPage),
  },
  
  {
    path: 'report-occurrence',
    loadComponent: () => import('./ocorrencia-suporte-relatar/pagina/report-occurrence/report-occurrence.page').then(m => m.ReportOccurrencePage),
  },

  {
    path: 'lost-email',
    loadComponent: () => import('./lost-email/lost-email.page').then( m => m.LostEmailPage)
  },
  
  {
    path: 'tutorial',
    loadComponent: () => import('./tutorial/tutorial.page').then(m => m.TutorialPage)
  }
  

];

