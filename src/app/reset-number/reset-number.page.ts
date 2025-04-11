import { Component } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-number',
  templateUrl: './reset-number.page.html',
  styleUrls: ['./reset-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ResetNumberPage {
  email: string = '';
  newNumber: string = '';
  confirmNumber: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async resetNumber() {
    if (!this.email) {
      this.presentAlert('Erro', 'Por favor, digite seu e-mail.');
      return;
    }

    if (!this.newNumber) {
      this.presentAlert('Erro', 'Por favor, digite o novo número.');
      return;
    }

    if (this.newNumber !== this.confirmNumber) {
      this.presentAlert('Erro', 'Os números não coincidem.');
      return;
    }

    // Simulando sucesso (MVP)
    console.log('Email:', this.email);
    console.log('Novo Número:', this.newNumber);

    await this.presentAlert('Sucesso', 'Seu número foi redefinido com sucesso.');

    this.router.navigate(['/login'], { queryParams: { numberResetSuccess: true } });
  }
}
