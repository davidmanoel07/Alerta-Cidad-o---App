import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular'; // Importe o AlertController
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.page.html',
  styleUrls: ['./anonymous.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnonymousPage {
  motivo: string = ''; // Armazena o motivo da ocorrência
  telefone: string = ''; // Armazena o telefone informado

  constructor(private router: Router, private alertController: AlertController) {} // Injete o AlertController

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  concluirDenuncia() {
    // Validação simples: verifica se o campo motivo está preenchido (o telefone é opcional pelo seu comentário)
    if (this.motivo.trim() === '') {
      this.presentAlert('Por favor, preencha o motivo da denúncia!'); // Use o alerta do Ionic
      return;
    }

    // Redireciona para a página de chat anônimo, passando o motivo como query parameter
    this.router.navigate(['/chat-anonymous'], { // **Alteração aqui: '/chat-anonymous'**
      queryParams: {
        motivo: this.motivo,
        telefone: this.telefone // O telefone será passado se o usuário preencher
      }
    });

    // Opcional: Se quiser limpar os campos após a navegação
    this.motivo = '';
    this.telefone = '';
  }
}

