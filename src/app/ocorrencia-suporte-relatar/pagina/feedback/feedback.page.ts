import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonItem, IonSelect, IonSelectOption, IonInput, IonLabel, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, IonItem, IonSelect, IonSelectOption, IonInput, IonLabel, IonButton]
})
export class FeedbackPage implements OnInit {

  ocorrenciaSelecionada: string  | null = null;
  nota: number  | null = null;


  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
  }

  async enviarFeedback() {
    if (this.nota === null || this.nota < 1 || this.nota > 5) {
      const alert = await this.alertCtrl.create({
        header: 'Nota inválida',
        message: 'Por favor, digite uma nota entre 1 e 5.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const alert = await this.alertCtrl.create({
      header: 'Obrigado!',
      message: `${this.ocorrenciaSelecionada}: Sua nota (${this.nota}) foi registrada com sucesso. `,
      buttons: ['Fechar']
    });
    await alert.present(); 
    console.log('Nota enviada:', this.nota);
    this.nota = null;
    this.ocorrenciaSelecionada = null; // zera dps de enviar a nota
  }

  goToOccurrences() {
    this.router.navigate(['/occurrences']);
  }

}