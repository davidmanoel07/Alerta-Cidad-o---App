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
    path: 'tutorial',
    loadComponent: () => import('./tutorial/tutorial.page').then(m => m.TutorialPage)
  },
  {
    path: 'get-address',
    loadComponent: () => import('./get-address/get-address.page').then( m => m.GetAddressPage)
  },
  {
    path: 'add-address',
    loadComponent: () => import('./add-address/add-address.page').then( m => m.AddAddressPage)
  },

  {
    path: 'feedback',
    loadComponent: () => import('./ocorrencia-suporte-relatar/pagina/feedback/feedback.page').then( m => m.FeedbackPage)
  },
  {
    path: 'status-occorrences',
    loadComponent: () => import('./ocorrencia-suporte-relatar/pagina/status-occurrences/status-occurrences.page').then( m => m.StatusOccurrencesPage)
  },
  {
    path: 'risk-area',
    loadComponent: () => import('./ocorrencia-suporte-relatar/pagina/risk-area/risk-area.page').then( m => m.RiskAreaPage)
  },
  

];

