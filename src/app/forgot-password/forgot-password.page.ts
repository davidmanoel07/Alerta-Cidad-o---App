import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ForgotPasswordPage {
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  resetPassword() {
    if (!this.email) {
      console.error('Por favor, digite seu e-mail.');
      // Exibir erro para o usuário (usar ion-alert no futuro)
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      console.error('As senhas não coincidem.');
      // Exibir erro para o usuário (usar ion-alert no futuro)
      return;
    }

    console.log('Email:', this.email);
    console.log('Nova Senha:', this.newPassword);
    // No MVP, aqui você simularia o envio desses dados para o backend
    // No futuro, esta lógica se comunicará com o backend para redefinir a senha

    // Para o MVP, vamos redirecionar para a página de login com uma mensagem de sucesso
    this.router.navigate(['/login'], { queryParams: { passwordResetSuccess: true } });
  }
}