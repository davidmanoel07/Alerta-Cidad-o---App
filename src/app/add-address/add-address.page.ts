import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular/standalone'; // Importe o AlertController

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddAddressPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController // Injete o AlertController
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      threatDescription: ['']
    });
  }

  ngOnInit() {}

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulário de endereço submetido:', this.registerForm.value);
      // Aqui você colocaria a lógica para salvar o endereço
      this.presentAlert('Seu endereço foi salvo em nosso sistema.'); // Exibe o alerta
      this.router.navigate(['/occurrences']); // Navega para a página /occurrences
    } else {
      console.log('Formulário inválido. Preencha os campos obrigatórios.');
      // Você pode adicionar um feedback visual para o usuário sobre os campos inválidos
    }
  }
}