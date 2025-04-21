import { Component } from '@angular/core';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule

@Component({
  selector: 'app-lost-email',
  templateUrl: './lost-email.page.html',
  styleUrls: ['./lost-email.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class LostEmailPage {
  email: string = '';
  newEmail: string = '';
  confirmEmail: string = ''; // Renomeei para ser mais semântico

  constructor(
    private navController: NavController, // Use NavController para navegação
    private alertController: AlertController,
    private http: HttpClient // Injete o HttpClient
  ) {}

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async createNewEmail() { // Renomeei a função para ser mais descritiva
    if (!this.email) {
      this.presentAlert('Erro', 'Por favor, digite o novo e-mail.');
      return;
    }

    if (!this.newEmail) {
      this.presentAlert('Erro', 'Por favor, confirme o novo e-mail.');
      return;
    }

    if (this.newEmail !== this.email) {
      this.presentAlert('Erro', 'Os e-mails não coincidem.');
      return;
    }

    // Aqui você faria a chamada ao seu backend para criar o novo e-mail
    console.log('Novo Email:', this.email);

    // Exemplo de chamada HTTP (adapte a URL e o corpo da requisição conforme sua API)
    // try {
    //   const response = await this.http.post('/api/users/create-new-email', { email: this.email }).toPromise();
    //   console.log('Resposta do servidor:', response);
    //   await this.presentAlert('Sucesso', 'Seu novo e-mail foi criado com sucesso.');
    //   this.navController.navigateForward('/login'); // Redirecione para a página de login
    // } catch (error: any) {
    //   console.error('Erro ao criar novo e-mail:', error);
    //   let errorMessage = 'Ocorreu um erro ao criar o novo e-mail.';
    //   if (error.error && error.error.message) {
    //     errorMessage = error.error.message;
    //   }
    //   await this.presentAlert('Erro', errorMessage);
    // }

    // Simulação de sucesso (para MVP ou teste sem backend)
    await this.presentAlert('Sucesso', 'Seu novo e-mail foi criado com sucesso.');
    this.navController.navigateForward('/login'); // Adicione esta linha para navegar para o login
  }
}